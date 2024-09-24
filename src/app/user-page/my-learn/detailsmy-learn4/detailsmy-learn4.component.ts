import { Component } from '@angular/core';
import {YoutubeService} from "../../../shared/services/youtube.service";

@Component({
  selector: 'app-detailsmy-learn',
  standalone: true,
  imports: [],
  templateUrl: './detailsmy-learn4.component.html',
  styleUrl: './detailsmy-learn4.component.scss'
})
export class DetailsmyLearn4Component {
  private readonly videoId = 'VhvpOkEFFEk'; // Replace with your video ID
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
