import { Bebida } from "./Bebida";
import { CalificacionPlan } from "./CalificacionPlan.enum";
import { Colacion } from "./Colacion";
import { Comida } from "./Comida";
import { Composicion } from "./Composicion";
import { Duracion } from "./Duracion.enum";
import { Objetivo } from "./Objetivo";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { TipoComida } from "./TipoComida.enum";
import { TipoDeComposicion } from "./TipoDeComposicion.enum";

export class PlanAlimenticio{

    private duracion : Duracion
    private unPaciente : Paciente
    private unProfesional : Profesional
    private edadDelPaciente : number
    private pesoDelPaciente : number
    private medidaDeCintura : number
    private comidas : Comida[]
    private bebidas : Bebida[]
    private colaciones : Colacion[]
    private objetivo : Objetivo[]

    constructor(){
        this.comidas = []
        this.bebidas =[]
        this.colaciones =[]
        this.objetivo = []
    }

    public setDuracion(unaDuracion:Duracion){
        this.duracion = unaDuracion
    }

    public setPaciente(unPaciente:Paciente){
        this.unPaciente = unPaciente
    }

    public setUnprofesional(unProfesional:Profesional){
        this.unProfesional = unProfesional
    }

    public setEdadDelPaciente(laEdadDelPaciente:number){
        this.edadDelPaciente = laEdadDelPaciente
    }

    public setPesoDelPaciente(unPesoDelPaciente:number){
        this.pesoDelPaciente = unPesoDelPaciente
    }

    public setMedidaDeCintura(unaMedidaDeCintura:number){
        this.medidaDeCintura = unaMedidaDeCintura
    }

    public getDuracion() : Duracion {
        return this.duracion
    } 

    public getunPaciente() : Paciente  {
        return this.unPaciente
    } 

    public getunProfesional() : Profesional {
        return this.unProfesional
    } 

    public getEdadDelPaciente() : number {
        return this.edadDelPaciente
    } 

    public getPesoDelPaciente() : number {
        return this.pesoDelPaciente
    } 

    public getMedidaDeCintura() : number {
        return this.medidaDeCintura
    } 

    public getComidas() : Comida[] {
        return this.comidas
    } 

    public getBebidas() : Bebida[] {
        return this.bebidas
    }

    public getColaciones() : Colacion[] {
        return this.colaciones
    }

    public getObjetivo() : Objetivo[] {
        return this.objetivo
    }

    public agregarObjetivo(objetivo: Objetivo){
        this.objetivo.push(objetivo)
    }

    public agregarComida(unaComida : Comida){
        this.comidas.push(unaComida)
    }

    public cantidadDeComida(){
        return this.comidas.length
    }

    public calcularResultado() : CalificacionPlan{
        var cantidadDeObjetivos = this.cantidadDeObjetivos()
        var cantidadDeObjetivosCumplidos = this.objetivo.filter(objetivo => objetivo.getCumplido()).length
        if(cantidadDeObjetivos === cantidadDeObjetivosCumplidos ) {
            return CalificacionPlan.EXCELENTE
        }

        var porcentaje = ((cantidadDeObjetivosCumplidos * 100) / cantidadDeObjetivos)
        console.log(porcentaje)
        if(porcentaje>= 60){
            return CalificacionPlan.MUY_BUENA
        }
        if(porcentaje>=50 && porcentaje<60){
            return CalificacionPlan.BUENA
        }
        else{
            return CalificacionPlan.REGULAR
        }
    }

    public cantidadDeObjetivos() : number{
        return this.objetivo.length
    }

    public comidasDeTipo(tipoComida: TipoComida, tipoComida2: TipoComida) {
        return this.comidas.filter(comida => comida.getTipoDeLaComida() === tipoComida || comida.getTipoDeLaComida() === tipoComida2);
    }


    public cantDeComidasSegunTipo(tipoComida : TipoComida, tipoComida2:TipoComida){
        return this.comidasDeTipo(tipoComida, tipoComida2).length
    }

    public fuerteEnProteinas(){
       var comidasAC = this.comidasDeTipo(TipoComida.ALMUERZO,TipoComida.CENA)
       var porcentajeProteinasTotal = 0
       comidasAC.forEach(comida => {
        porcentajeProteinasTotal += comida.porcentajeDeProteinas()
        })
        var promedio = porcentajeProteinasTotal / comidasAC.length

        return promedio > 50
    }

    public bienVerde(){
        var comidasAC = this.comidasDeTipo(TipoComida.ALMUERZO,TipoComida.CENA)
        var porcentajeVegetalesTotal = 0
        comidasAC.forEach(comida => {
            porcentajeVegetalesTotal += comida.porcentajeDeVegetales()
        });
        var promedio = porcentajeVegetalesTotal / comidasAC.length

        return promedio > 35
    }

    public cantDeColacionesPermitidas () {
        return this.colaciones.length
    }

    public cantDeBebidasPermitidas () {
        return this.bebidas.length
    }

    public agregarUnaColacion(colacion : Colacion){
        this.colaciones.push(colacion)
    }

    public agregarUnaBebida(bebida : Bebida){
        this.bebidas.push(bebida)
    }

}    








