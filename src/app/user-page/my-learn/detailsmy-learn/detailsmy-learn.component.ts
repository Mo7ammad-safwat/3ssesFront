import { Component } from '@angular/core';
import {YoutubeService} from "../../../shared/services/youtube.service";

@Component({
  selector: 'app-detailsmy-learn',
  standalone: true,
  imports: [],
  templateUrl: './detailsmy-learn.component.html',
  styleUrl: './detailsmy-learn.component.scss'
})
export class DetailsmyLearnComponent {
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
