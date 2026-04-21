import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.html',
  template: `<h1>{{ title() }}</h1>`, //Inline template
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hello World from Angular 24!');
  name = "Shriharsh"
  age = 24

  updateTitle() {
    this.name = "Shriharsh Pattar"
  }
}
