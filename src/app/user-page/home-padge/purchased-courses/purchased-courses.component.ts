import { Component, OnInit, AfterViewInit } from '@angular/core';
import { YoutubeService } from '../../../shared/services/youtube.service'; // Update the import path as needed

@Component({
  selector: 'app-purchased-courses',
  standalone: true,
  imports: [],
  templateUrl: './purchased-courses.component.html',
  styleUrls: ['./purchased-courses.component.scss']
})
export class PurchasedCoursesComponent implements OnInit, AfterViewInit {
  private readonly videoId = 'vsR-yiGFDZc'; // Replace with your video ID
  private readonly playerElementId = 'youtube-player';
selectedDate: any;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.youtubeService.createPlayer(this.videoId, this.playerElementId);
  }
}
