import { Component } from '@angular/core';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona = new Persona("santiago", "free", 12, "mujer");

  nombre: string;
  apellido: string;
  sexo: string; 
  edad: number; 
  datos: string[] = ["santiago", "daniel", "misael"];


constructor() {

  this.persona.setNombre("Ubaldo");
  this.persona.setApellido("De Santiago");
  this.persona.setEdad(20);
  this.persona.setSexo("Hombre");
  
  console.log("Cargo el contructor");

  this.nombre = this.persona.getNombre();
  this.apellido = this.persona.getApellido();
  this.sexo = this.persona.getSexo();
  this.edad = this.persona.getEdad();
}


}
