import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChienComponent } from "./chien/chien.component";
import { ChienDetailComponent } from "./chien-detail/chien-detail.component";
import { ChienServices } from './services/chien.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {

  }
}
