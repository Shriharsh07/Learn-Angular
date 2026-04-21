import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello World');
  name = "Shriharsh"
  age = 24

  updateTitle() {
    this.name = "Shriharsh Pattar"
  }
}
