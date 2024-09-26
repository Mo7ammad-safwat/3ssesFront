import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-admin',
  standalone: true,
  imports: [CategoryTableComponent, CommonModule],
  templateUrl: './category-admin.component.html',
  styleUrl: './category-admin.component.scss',
})
export class CategoryAdminComponent {
  constructor(private activpop: NgbModal, private router: Router) {}
  isSidebarHovered: boolean = false;

  onSidebarHover() {
    this.isSidebarHovered = true;
  }

  onSidebarLeave() {
    this.isSidebarHovered = false;
  }
  openAddCourseModal() {
    this.activpop.open(AddcategoryComponent);
  }
}
