import { Especialidad } from "./Especialidad";

export class Profesional{
    private nombre : string;
    private apellido : string;
    private especialidad : Especialidad;
    private matricula : string;

    public setNombre(unNombre:string){
        this.nombre = unNombre
    }

    public setApellido(unApellido:string){
        this.apellido = unApellido
    }

    public setEspecialidad(unaEspecialidad:Especialidad){
        this.especialidad = unaEspecialidad
    }

    public setMatricula(unaMatricula:string){
        this.matricula = unaMatricula
    }

    public getNombre() : string {
        return this.nombre
    } 

    public getApellido() : string {
        return this.apellido
    } 

    public getEspecialidad() : Especialidad {
        return this.especialidad
    } 

    public getMatricula() : string {
        return this.matricula
    } 





}