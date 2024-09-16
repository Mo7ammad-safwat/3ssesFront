import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home-padge',
  standalone: true,
  imports: [FormsModule, CalendarModule, CommonModule], // Add CommonModule to imports
  templateUrl: './home-padge.component.html',
  styleUrls: ['./home-padge.component.scss']
})
export class HomePadgeComponent {
  selectedDate: Date | null = null;  // Stores the selected date

  // Optional: Add min/max date if needed
  minDate: Date = new Date();  // Today
  maxDate: Date = new Date(new Date().getFullYear(), 11, 31);  // End of year

  // Variable to track the selected category for the tab switching
  selectedCategory: string = 'All';

  // Method to change the selected category
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
