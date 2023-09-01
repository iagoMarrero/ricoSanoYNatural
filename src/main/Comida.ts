import { Composicion } from "./Composicion";
import { TipoComida } from "./TipoComida.enum";

export class Comida{
    
    private tipoDeLaComida : TipoComida
    private descripcionDeLaComida : string
    private composiciones : Composicion[]

    constructor(){
        this.composiciones = []
    }

    public setTipoDeLaComida(unaComida:TipoComida){
        this.tipoDeLaComida = unaComida
    }

    public setDescripcionDeLaComida(unaDescripcionDeLaComida:string){
        this.descripcionDeLaComida = unaDescripcionDeLaComida
    }

    public getTipoDeLaComida() : TipoComida {
        return this.tipoDeLaComida
    }

    public getDescripcionDeLaComida() : string {
        return this.descripcionDeLaComida
    }

    public getComposiciones() : Composicion[] {
        return this.composiciones
    }

}