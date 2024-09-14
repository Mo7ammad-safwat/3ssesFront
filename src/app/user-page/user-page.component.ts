import { Component } from '@angular/core';
import { SidebarComponent } from "../core/sidebar/sidebar.component";
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  isSidebarHovered: boolean = false;

  constructor(private router: Router) {}

  onSidebarHover() {
    this.isSidebarHovered = true;
  }

  onSidebarLeave() {
    this.isSidebarHovered = false;
  }
}
