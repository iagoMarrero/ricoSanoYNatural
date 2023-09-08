import { Composicion } from "./Composicion";
import { TipoComida } from "./TipoComida.enum";
import { TipoDeComposicion } from "./TipoDeComposicion.enum";

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

    public porcentajeDeProteinas() : number {
        var composicionProteica = this.composiciones.filter(composicion => composicion.getTipo() === TipoDeComposicion.PROTEINA)
        var sumaDeComposicionesProteica = 0
        composicionProteica.forEach(proteina => {
            sumaDeComposicionesProteica += proteina.getPorcentajes()
        });
        return sumaDeComposicionesProteica
    }

    public porcentajeDeVegetales() : number {
        var composicionVegetal = this.composiciones.filter(composicion => composicion.getTipo() === TipoDeComposicion.VEGETALES)
        var sumaDeComposicionesVegetal = 0
        composicionVegetal.forEach(vegetal =>{
            sumaDeComposicionesVegetal += vegetal.getPorcentajes()
        });
        return sumaDeComposicionesVegetal
    }

    public agregarComposicion(composicion : Composicion){
        this.composiciones.push(composicion)
    }

}