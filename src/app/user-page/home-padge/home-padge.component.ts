import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home-padge',
  standalone: true,
  imports: [CardModule, FormsModule, CalendarModule, CommonModule],
  templateUrl: './home-padge.component.html',
  styleUrls: ['./home-padge.component.scss']
})
export class HomePadgeComponent {
  selectedDate: Date | null = null;
  minDate: Date = new Date();
  maxDate: Date = new Date(new Date().getFullYear(), 11, 31);
  selectedCategory: string = 'All';

  constructor(private router: Router) {}

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  navigateToPage(url: string) {
    this.router.navigate([url]);
  }
}
