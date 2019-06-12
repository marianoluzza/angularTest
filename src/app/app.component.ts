import { Component } from '@angular/core';
import { Usuario } from './tarjeta/usuario.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  usuario: Usuario;

  constructor(private http:HttpClient){
    let usuario = new Usuario();
    usuario.nombre = "Mariano Luzza";
    usuario.nacimiento = new Date(2000,1,1);
    usuario.direccion = "San Martin 1387";
    usuario.telefonos = [
      "111-1234",
      "111-1235"
    ];
    this.usuario = usuario;
  }

  ngOnInit(){
    let obs = this.http.get("http://localhost:3000/api/product");
    obs.subscribe((res)=>{
      console.log(res);
    })
  }
}
