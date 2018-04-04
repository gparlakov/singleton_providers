import { Component, Input } from '@angular/core';
import { Shorthand, Longhand, Constructed } from './services';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  constructor(s: Shorthand, l: Longhand, f: Constructed) { }
  @Input() name: string;
}
