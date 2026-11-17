import { Component } from '@angular/core';
import { ArScene } from './components/ar-scene/ar-scene';

@Component({
  selector: 'app-root',
  imports: [ArScene],
  template: '<app-ar-scene />',
})
export class App {}
