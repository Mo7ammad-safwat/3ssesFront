import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../../../shared/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [ ],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
})
export class CategoryTableComponent implements OnInit, OnDestroy {
  Category?: any[];
  loaddata: boolean = false;
  loadError: boolean = false;

  constructor(
    private categorieService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadData();
   
  }

  loadData() {
    this.loaddata = false;
    this.loadError = false;
    this.categorieService.getAllCategories().subscribe({
      next: (data) => {
        this.loaddata = true;
        this.Category = data;
      },
      error: (error) => {
        this.loaddata = false;
        this.loadError = true;

        console.error('Error fetching data:', error);
      },
    });
  }

  onUpdate(category: any) {
    const modalRef = this.modalService.open(AddcategoryComponent);
    modalRef.componentInstance.categoryToEdit = category;
  }

  confirmDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.deleteData(id);
      }
    });
  }

  deleteData(id: any) {
    // this.categorieService.deleteData(id).subscribe({
    //   next: (data) => {
    //     Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    //     this.loadData();
    //   },
    //   error: (error) => {
    //     console.error('Error deleting data:', error);
    //     Swal.fire('Error!', 'There was an error deleting the item.', 'error');
    //   },
    // });
  }
  ngOnDestroy(): void {
    // this.categoriesSubscription?.unsubscribe();
  }
}
