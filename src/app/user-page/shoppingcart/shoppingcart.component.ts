import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";

interface Course {
  title: string;
  category: string;
  price: number;
  instructor: string;
  image: string;
}

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [CommonModule, DataViewModule, ButtonModule, TagModule],
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent {
  courses: Course[] = [
  {
    title: 'Advanced Calculus',
    category: 'Mathematics',
    price: 150,
    instructor: 'Jane Smith',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
  },
  {
    title: 'Linear Algebra',
    category: 'Mathematics',
    price: 150,
    instructor: 'John Les',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
  },
  {
    title: 'Probability Theory',
    category: 'Mathematics',
    price: 200,
    instructor: 'Jane Smith',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
  },
  {
    title: 'Number Theory',
    category: 'Mathematics',
    price: 250,
    instructor: 'Kate Jones',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
  },
  {
    title: 'Statistics',
    category: 'Mathematics',
    price: 300,
    instructor: 'Anna Clark',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
  }
  ];
}
