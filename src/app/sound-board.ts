import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sound-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sound-board.html',
  styleUrls: ['./sound-board.css']
})
export class SoundBoardComponent {
  sounds: Array<{ label: string; src: string; audio: HTMLAudioElement | null }> = [
    { label: 'Swoosh', src: 'assets/air-blow-380645.mp3', audio: null },
    { label: 'Applause', src: 'assets/applause-alks-ses-efekti-125030.mp3', audio: null },
    { label: 'Epic Fail', src: 'assets/cartoon-fail-trumpet-278822.mp3', audio: null },
    { label: 'Crickets', src: 'assets/cricket-250777.mp3', audio: null },
    { label: 'Ding', src: 'assets/ding-idea-40142.mp3', audio: null },
    { label: 'Stigidish', src: 'assets/sting-rimshot-drum-roll-smooth-100369.mp3', audio: null },
    { label: 'Roasted!', src: 'assets/whip-02-242215.mp3', audio: null }
    // Add an 8th sound here if you add another mp3 file
  ];

  toggleSound(index: number) {
    const sound = this.sounds[index];
    if (!sound.audio) {
      sound.audio = new Audio(sound.src);
      sound.audio.onended = () => {
        sound.audio = null;
      };
      sound.audio.play();
    } else if (sound.audio && !sound.audio.paused) {
      sound.audio.pause();
      sound.audio.currentTime = 0;
      sound.audio = null;
    } else if (sound.audio) {
      sound.audio.play();
    }
  }
}
