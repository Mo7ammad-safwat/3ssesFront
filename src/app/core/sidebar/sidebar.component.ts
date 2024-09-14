import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  openHome() {
    this.router.navigate(['home']);
  }
  openCategory() {
    this.router.navigate(['admin']);
  }
  openCourse() {
    if (this.router.url.includes('admin')) {
      this.router.navigate(['admin/courses']);
    } else {
      this.router.navigate(['teacher']);
    }
  }
  openSlider() {
    this.router.navigate(['admin/slider']);
  }
  openEnrollment() {
    if (this.router.url.includes('admin')) {
      this.router.navigate(['admin/enrollment']);
    } else {
      this.router.navigate(['teacher/enrollment']);
    }
  }
  onTeacherRequest() {
    this.router.navigate(['admin/teacher-request']);
  }

  onAboutUs() {
    this.router.navigate(['admin/about-us']);
  }

  isAdmin(): boolean {
    return this.router.url.includes('admin');
  }

  isTeacher(): boolean {
    return this.router.url.includes('teacher');
  }
}
