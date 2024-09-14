import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-home-padge',
  standalone: true,
  imports: [FormsModule, CalendarModule],
  templateUrl: './home-padge.component.html',
  styleUrls: ['./home-padge.component.scss']
})
export class HomePadgeComponent {
  selectedDate: Date | null = null;  // Stores the selected date

  // Optional: Add min/max date if needed
  minDate: Date = new Date();  // Today
  maxDate: Date = new Date(new Date().getFullYear(), 11, 31);  // End of year
}
