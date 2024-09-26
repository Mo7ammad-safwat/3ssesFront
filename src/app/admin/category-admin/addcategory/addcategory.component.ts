import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Constants } from '../../../shared/constants';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../shared/services/category.service';

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.scss',
})
export class AddcategoryComponent {
  @Input() categoryToEdit?: Category;
  myform: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  isDragging = false;
  selectedFile: File | null = null;
  oldImageName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    public activeModal: NgbActiveModal
  ) {
    this.myform = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.categoryToEdit) {
      this.myform.patchValue(this.categoryToEdit);
      this.imagePreview =
        Constants.CATEGORY_DOWNLOAD_IMAGE + this.categoryToEdit.imageUrl!;
      this.oldImageName = this.categoryToEdit.imageUrl!;
    }
  }

 







  onSubmit() {
    if (this.myform.invalid) {
      Swal.fire('Error!', 'Please fill all the required fields.', 'error');
      return;
    }

    if (this.selectedFile && this.oldImageName !== this.myform.value.imageUrl) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.categoryService.uploadImages([this.selectedFile]).subscribe({
        next: (response) => {
          this.submitFormData();
        },
        error: (error) => {
          console.error('Error uploading image:', error);
          Swal.fire(
            'Error!',
            'There was an error uploading the image.',
            'error'
          );
        },
      });
    } else {
      this.submitFormData();
    }
  }

  submitFormData() {
    let data = this.myform.value;

    if (this.categoryToEdit) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to update this category?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.categoryService
            .updateData({ ...this.categoryToEdit, ...data })
            .subscribe({
              next: (data) => {
                this.myform.reset();
                this.activeModal.close('Close click');
                Swal.fire(
                  'Updated!',
                  'The category has been updated.',
                  'success'
                );
              },
              error: (error) => {
                console.error('Error updating data:', error);
                Swal.fire(
                  'Error!',
                  'There was an error updating the category.',
                  'error'
                );
              },
            });
        }
      });
    } else {
      this.categoryService.postData(data).subscribe({
        next: (data) => {
          this.myform.reset();
          this.activeModal.close('Close click');
          Swal.fire('Saved!', 'The category has been saved.', 'success');
        },
        error: (error) => {
          console.error('Error posting data:', error);
          Swal.fire(
            'Error!',
            'There was an error saving the category.',
            'error'
          );
        },
      });
    }
  }

  onclose() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to close without saving?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, close it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.activeModal.close('Close click');
      }
    });
  }

  hasUnsavedChanges = false;

  onInputChange() {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): Promise<boolean> {
    if (this.hasUnsavedChanges) {
      return Swal.fire({
        title: 'Are you sure?',
        text: 'You have unsaved changes. Do you really want to leave?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, leave',
        cancelButtonText: 'No, stay',
      }).then((result) => result.isConfirmed);
    } else {
      return Promise.resolve(true);
    }
  }

  openAddCourseModal() {
    // Your logic to open the modal
  }
}
