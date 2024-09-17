import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {}
