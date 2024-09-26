declare namespace YT {
  interface Player {
    new (elementId: string, options: PlayerOptions): Player;
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    // Add other methods as needed
  }

  interface PlayerOptions {
    videoId: string;
    playerVars?: any;
    events?: any;
  }

  interface PlayerEvent {
    target: Player;
  }
}
