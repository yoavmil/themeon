import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SoundBoardComponent } from './sound-board';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SoundBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('themeon');
}
