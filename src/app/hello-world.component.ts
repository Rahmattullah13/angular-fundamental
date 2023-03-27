import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  //   template: `
  //     <h2>Hello World</h2>
  //     <p>This is my first Component</p>
  //   `,
  styles: [
    `
      h2,
      p {
        font-family: sans-serif;
      }
    `,
  ],
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
  title = 'Learn Angular';
  image = '../assets/angular.png';
  active = true;

  hello(name: String) {
    alert(`Hello, ${name}!!!`);
  }
}
