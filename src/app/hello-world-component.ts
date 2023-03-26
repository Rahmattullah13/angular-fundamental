import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first Component</p>
  `,
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
}
