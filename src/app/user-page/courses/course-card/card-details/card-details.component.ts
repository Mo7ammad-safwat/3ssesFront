import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, PanelModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
@Input() Course: any;
}
