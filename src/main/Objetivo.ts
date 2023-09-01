export class Objetivo{
    private cumplido : boolean
    private descripcion : string

    constructor(){
        this.cumplido = false
    }

    public alcanzado(){
        this.cumplido = true
    }

    public setDescripcion(unaDescripcion:string){
        this.descripcion = unaDescripcion
    }

    public getCumplido() : boolean {
        return this.cumplido
    }

    public getDescripcion() : string {
        return this.descripcion
    }
}