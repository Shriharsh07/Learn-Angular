import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComp } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComp],
  templateUrl: './app.html',
  //template: `<h1>{{ title() }}</h1>`, //Inline template
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Hello World from Angular 24!');
  name = "Shriharsh"
  age = 24
}
