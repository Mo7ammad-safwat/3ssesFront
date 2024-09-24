import { Component } from '@angular/core';
import {YoutubeService} from "../../../shared/services/youtube.service";

@Component({
  selector: 'app-detailsmy-learn',
  standalone: true,
  imports: [],
  templateUrl: './detailsmy-learn2.component.html',
  styleUrl: './detailsmy-learn2.component.scss'
})
export class DetailsmyLearn2Component {
  private readonly videoId = '-KfG8kH-r3Y'; // Replace with your video ID
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
