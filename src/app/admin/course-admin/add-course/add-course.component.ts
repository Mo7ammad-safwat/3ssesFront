import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

import { Subject } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import { Constants } from '../../../shared/constants';
import { CourseService } from '../../../shared/services/course.service';
import { CategoryService } from '../../../shared/services/category.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SkeletonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss',
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  categoryList: any[] = [];
  hasUnsavedChanges = false;
  isDataSaved = false;
  photoPreviewUrl: string | ArrayBuffer | null = null;
  imageUrl: string = '';
  isEditMode: boolean = false;
  currentCourseId?: number;
  descriptionMaster?: any;
  expandedSectionIndex: number | null = null;
  expandedLessonIndexes: { [sectionIndex: number]: number | null } = {};
  currentLessonId: number | null = null;

  imagePreview: string | ArrayBuffer | null = null;
  isDragging = false;
  selectedFile: File | null = null;
  oldImageName: string = '';

  courseLoaded: boolean = false;
  courseError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.courseForm = this.fb.group({
      id: [0],
      photo: [null],
      titleEnglish: ['', Validators.required],
      descriptionArabic: ['', Validators.required],
      descriptionEnglish: ['', Validators.required],
      language: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      fixedPrice: [0, [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required],
      sections: this.fb.array([]),
    });

    this.courseForm.valueChanges.subscribe(() => {
      if (this.isEditMode) {
        this.hasUnsavedChanges = true;
      }
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (courseId) {
      this.isEditMode = true;
      this.currentCourseId = +courseId;
      this.loadCourseData(this.currentCourseId);
    }
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories: any[]) => (this.categoryList = categories),
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  loadCourseData(courseId: number): void {
    this.courseLoaded = false;
    this.courseError = false;
    this.courseService.getCourseById(courseId).subscribe(
      (course: any) => {
        this.courseLoaded = true;
        this.patchCourseData(course);
      },
      (error) => {
        this.courseError = true;
      }
    );
  }

  patchCourseData(course: any): void {}

  get sections(): FormArray {
    return this.courseForm.get('sections') as FormArray;
  }

  addSection() {
    const sectionGroup = this.fb.group({
      id: [0],
      courseId: [0],
      arabicTitle: ['', Validators.required],
      englishTitle: ['', Validators.required],
      position: [1, [Validators.required, Validators.min(1)]],
      lessons: this.fb.array([]),
    });
    this.sections.push(sectionGroup);
    this.updateSectionPositions();
    if (this.isEditMode) {
      this.hasUnsavedChanges = true;
    }
  }

  addLesson(sectionIndex: number) {
    const lessonGroup = this.fb.group({
      id: [0],
      sectionId: [0],
      titleArabic: ['', Validators.required],
      titleEnglish: ['', Validators.required],
      duration: [0, Validators.required],
      position: [1, [Validators.required]],
      courseType: ['paid', Validators.required],
      contentURL: [''],
    });
    this.getLessons(sectionIndex).push(lessonGroup);
    this.updateLessonPositions(sectionIndex);
    if (this.isEditMode) {
      this.hasUnsavedChanges = true;
    }
  }
  getLessons(sectionIndex: number): FormArray {
    return this.sections.at(sectionIndex).get('lessons') as FormArray;
  }

  onSubmit() {}

  updateSectionPositions() {
    this.sections.controls.forEach((sectionControl, index) => {
      sectionControl.get('position')?.setValue(index + 1);
    });
  }

  updateLessonPositions(sectionIndex: number) {
    const lessonsArray = this.getLessons(sectionIndex);
    lessonsArray.controls.forEach((lessonControl, index) => {
      lessonControl.get('position')?.setValue(index + 1);
    });
  }

  moveSectionUp(sectionIndex: number) {
    if (sectionIndex > 0) {
      const sectionsArray = this.sections;
      const section = sectionsArray.at(sectionIndex);
      sectionsArray.removeAt(sectionIndex);
      sectionsArray.insert(sectionIndex - 1, section);
      this.updateSectionPositions();
      this.expandedSectionIndex = sectionIndex - 1;
    }
  }

  moveSectionDown(sectionIndex: number) {
    const sectionsArray = this.sections;
    if (sectionIndex < sectionsArray.length - 1) {
      const section = sectionsArray.at(sectionIndex);
      sectionsArray.removeAt(sectionIndex);
      sectionsArray.insert(sectionIndex + 1, section);
      this.updateSectionPositions();
      this.expandedSectionIndex = sectionIndex + 1;
    }
  }

  moveLessonUp(sectionIndex: number, lessonIndex: number) {
    const lessonsArray = this.getLessons(sectionIndex);
    if (lessonIndex > 0) {
      const lesson = lessonsArray.at(lessonIndex);
      lessonsArray.removeAt(lessonIndex);
      lessonsArray.insert(lessonIndex - 1, lesson);
      this.updateLessonPositions(sectionIndex);
      this.expandedSectionIndex = sectionIndex;
      this.expandedLessonIndexes[sectionIndex] = lessonIndex - 1;
    }
  }

  moveLessonDown(sectionIndex: number, lessonIndex: number) {
    const lessonsArray = this.getLessons(sectionIndex);
    if (lessonIndex < lessonsArray.length - 1) {
      const lesson = lessonsArray.at(lessonIndex);
      lessonsArray.removeAt(lessonIndex);
      lessonsArray.insert(lessonIndex + 1, lesson);
      this.updateLessonPositions(sectionIndex);
      this.expandedSectionIndex = sectionIndex;
      this.expandedLessonIndexes[sectionIndex] = lessonIndex + 1;
    }
  }
}
