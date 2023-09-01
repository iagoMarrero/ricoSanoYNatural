import { Sexo } from "./Sexo.enum";

export class Paciente{

    private nombre : string;
    private apellido : string;
    private fechaDeNacimiento : Date;
    private sexo : Sexo;
    private disciplina : string;

    public setNombre(unNombre:string){
        this.nombre = unNombre
    }

    public setApellido(unApellido:string){
        this.apellido = unApellido
    }

    public setfechaDeNacimiento(unaEdad:Date){
        this.fechaDeNacimiento = unaEdad
    }

    public setSexo(unSexo:Sexo){
        this.sexo = unSexo
    }

    public setDisciplina(unaDisciplina:string){
        this.disciplina = unaDisciplina
    }

    public getNombre() : string {
        return this.nombre
    }
    
    public getApellido() : string {
        return this.apellido
    } 
    
    public getfechaDeNacimiento() : Date {
        return this.fechaDeNacimiento
    }

    public getSexo() : Sexo {
        return this.sexo
    }

    public getDisciplina() : string {
        return this.disciplina
    }


}