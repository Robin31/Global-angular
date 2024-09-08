import { Component, OnInit } from '@angular/core';
import { ChienServices } from '../services/chien.services';

@Component({
  selector: 'app-chien-view',
  templateUrl: './chien-view.component.html',
  styleUrl: './chien-view.component.css'
})
export class ChienViewComponent implements OnInit {
  isAuth = true;

  lastUpdate = new Date();

  chiens!: any[];

  constructor(private chienServices: ChienServices) {

  }

  ngOnInit() {
    this.chiens = this.chienServices.chiens;
  }

  onGuerir() {
    this.chienServices.switchOnAll();
  }

  onMalade() {
    this.chienServices.switchOfAll();
  }
}
