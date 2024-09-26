import { Component } from '@angular/core';
import {YoutubeService} from "../../../shared/services/youtube.service";

@Component({
  selector: 'app-detailsmy-learn',
  standalone: true,
  imports: [],
  templateUrl: './detailsmy-learn.component.html',
  styleUrl: './detailsmy-learn.component.scss',
})
export class DetailsmyLearnComponent {
  private readonly videoId = 'vsR-yiGFDZc'; // Replace with your video ID
  private readonly playerElementId = 'youtube-player';
  selectedDate: any;

  constructor(private youtubeService: YoutubeService) {}
  chapters = [
    {
      title: 'Chapter 1',
      lessons: [
        {
          title: 'Lesson 1. Introduction to Mechanics',
          link: 'https://drive.google.com/uc?export=download&id=1oeRpIp_zXLkUs8DD6CLlac1hL5qxfUVV',
          filename: 'Lesson1.pdf',
        },
        {
          title: 'Lesson 2. Thermodynamics Basics',
          link: 'https://drive.google.com/uc?export=download&id=1oeRpIp_zXLkUs8DD6CLlac1hL5qxfUVV',
          filename: 'Lesson2.pdf',
        },
      ],
    },
    {
      title: 'Chapter 2',
      lessons: [
        {
          title: 'Lesson 3. Fluid Dynamics',
          link: 'https://drive.google.com/uc?export=download&id=1oeRpIp_zXLkUs8DD6CLlac1hL5qxfUVV',
          filename: 'Lesson3.pdf',
        },
      ],
    },
  ];

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.youtubeService.createPlayer(this.videoId, this.playerElementId);
  }
}
