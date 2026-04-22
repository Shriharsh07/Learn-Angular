import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [Login, Signup],
  templateUrl: './app.html',
  //template: `<h1>{{ title() }}</h1>`, //Inline template
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Hello World from Angular 24!');
  name = "Shriharsh"
  age = 24
}
