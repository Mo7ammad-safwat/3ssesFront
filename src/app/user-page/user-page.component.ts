import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { HeadrComponent } from "../../app/core/sidebar/headr/headr.component"; // Import SidebarComponent

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, SidebarComponent, HeadrComponent], // Import SidebarComponent
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
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
