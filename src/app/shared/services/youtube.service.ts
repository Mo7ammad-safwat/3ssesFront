import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private ytPlayer!: YT.Player;

  constructor() { }

  public createPlayer(videoId: string, elementId: string): void {
    this.ytPlayer = (window as any).YT.Player(elementId, {
      videoId,
      width: '100%',
      height: '350',
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onReady: (event: YT.PlayerEvent) => this.onPlayerReady(event),
      },
    });
  }

  private onPlayerReady(event: YT.PlayerEvent): void {
    event.target.playVideo();
  }
}
