import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Logger } from './logger.service';

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
  active = false;
  counter = 0;

  constructor(private logger: Logger) {}

  increment() {
    this.logger.writeCount(this.counter)
    this.counter++;
  }

  onEditClick() {
    this.active = !this.active;
  }

  hello(name: String) {
    alert(`Hello, ${name}!!!`);
  }
}
