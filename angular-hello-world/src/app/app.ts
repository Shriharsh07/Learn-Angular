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

  handleClick() {
    alert('Button Clicked!');
    //If we are going to call another function in the same component, we can do it like this:
    this.otherFunction(); // Call another function
  }

  otherFunction() {
    console.log('This is another function.');
  }
}
