import { TipoDeComposicion } from "./TipoDeComposicion.enum"

export class Composicion{
    private tipo : TipoDeComposicion
    private nombre : string
    private porcentajes : number

    public setTipo(unTipo:TipoDeComposicion){
        this.tipo = unTipo
    }

    public setNombre(unNombre:string){
        this.nombre = unNombre
    }

    public setPorcentajes(unPorcentaje:number){
        this.porcentajes = unPorcentaje
    }

    public getTipo() : TipoDeComposicion {
        return this.tipo
    }

    public getNombre() : string {
        return this.nombre
    }

    public getPorcentajes() : number {
        return this.porcentajes
    }
}