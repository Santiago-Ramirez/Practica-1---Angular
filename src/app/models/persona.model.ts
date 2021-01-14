export class Persona {
  private nombre: string;
  private apellido: string;
  private edad: number;
  private sexo: string;

  
  constructor(nombre: string, apellido: string, edad: number, sexo: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
  }

  public setNombre (nombre: string) {
    this.nombre = nombre;
  }

  public setApellido (apellido: string) {
    this.apellido = apellido;
  }

  public setEdad(edad: number) {
    this.edad = edad;
  }

  public setSexo(sexo: string) {
    this.sexo = sexo;
  }

  public getNombre (): string {
    return this.nombre;
  }

  public getApellido (): string {
    return this.apellido;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getSexo(): string {
    return this.sexo;
  }

  

}
