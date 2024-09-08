import { Component, OnInit } from '@angular/core';
import { ChienServices } from '../services/chien.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chien-solo',
  templateUrl: './chien-solo.component.html',
  styleUrl: './chien-solo.component.css'
})
export class ChienSoloComponent implements OnInit {
  name: string | undefined = "Igor";
  status: string | undefined = 'gueri';
  constructor(private chienServices: ChienServices, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.chienServices.getChiensById(+id)?.name;
    this.status = this.chienServices.getChiensById(+id)?.status;
  }
}
