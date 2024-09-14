import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  Course: any[] = [
    {
      id: "1",
      title: 'Arabic',
      description: "Learn Arabic for Students in 3rd grade",
      Userid: '1'
    } ,

    {
      id: "2",
      title: 'English',
      description: "Learn English for Students in 3rd grade",
      Userid: '2'
    } ,

    {
      id: "3",
      title: 'Math',
      description: "Learn Math for Students in 3rd grade",
      Userid: '3'
    } ,

    {
      id: "4",
      title: 'French',
      description: "Learn French for Students in 3rd grade",
      Userid: '4'
    } ,

    {
      id: "5",
      title: 'German',
      description: "Learn German for Students in 3rd grade",
      Userid: '5'
    } ,

    {
      id: "6",
      title: 'Physics',
      description: "Learn Physics for Students in 3rd grade",
      Userid: '6'
    }
  ]

}
