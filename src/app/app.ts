import { Component } from '@angular/core';
import { FiguraComponent } from './components/figura';

@Component({
  selector: 'app-root',
  imports: [FiguraComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
