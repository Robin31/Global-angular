import { Component, Input, OnInit } from '@angular/core';
import { ChienServices } from '../services/chien.services';


@Component({
  selector: 'app-chien-detail',
  templateUrl: './chien-detail.component.html',
  styleUrl: './chien-detail.component.css'
})
export class ChienDetailComponent {

  @Input() chienName: string = '';
  @Input() chienStatus: string = '';
  @Input() indexOfChien!: number;
  @Input() id!: number;

  constructor(private chienServices: ChienServices) { }

  ngOnInit() {

  }
  getStatus() {
    return this.chienStatus;
  }

  getColor() {
    if (this.chienStatus === 'malade') {
      return 'red';
    }
    else if (this.chienStatus === 'gueri') {
      return 'green';
    }
    return;
  }

  onSwitchOn() {
    this.chienServices.switchOfOne(this.indexOfChien);
  }

  onSwitchOff() {
    this.chienServices.switchOnOne(this.indexOfChien);
  }
}
