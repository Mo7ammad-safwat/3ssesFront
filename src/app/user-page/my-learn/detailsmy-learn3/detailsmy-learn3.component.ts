import { Component } from '@angular/core';
import {YoutubeService} from "../../../shared/services/youtube.service";

@Component({
  selector: 'app-detailsmy-learn',
  standalone: true,
  imports: [],
  templateUrl: './detailsmy-learn3.component.html',
  styleUrl: './detailsmy-learn3.component.scss'
})
export class DetailsmyLearn3Component {
  private readonly videoId = '3pK9Gqrtihg'; // Replace with your video ID
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
