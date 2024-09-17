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
      title: 'Introduction to Programming',
      category: 'Computer Science',
      price: 100,
      instructor: 'John Doe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
    },
    {
      title: 'Advanced Mathematics',
      category: 'Mathematics',
      price: 150,
      instructor: 'Jane Smith',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
    },
    {
      title: 'Graphic Design Basics',
      category: 'Design',
      price: 200,
      instructor: 'Emily Johnson',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
    },
    {
      title: 'Business Management',
      category: 'Business',
      price: 250,
      instructor: 'Michael Brown',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
    },
    {
      title: 'Digital Marketing',
      category: 'Marketing',
      price: 300,
      instructor: 'Sarah Davis',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/480px-Copyright.svg.png'
    }
  ];
}
