import { Component, OnInit, Input } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Usuario } from './usuario.model';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input("usuario")contacto: Usuario;

  constructor() {
  }

  ngOnInit() { 
  }

}
