import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  valor: Date;
  mensaje: string = "Hola";
  idClock: number;

  constructor() { 
  }

  stopClock(){
    window.clearInterval(this.idClock);
    this.idClock = 0;
  }

  startClock(){
    this.valor = new Date();
    this.idClock = window.setInterval(()=> {
      this.valor = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.startClock();
  }

}
