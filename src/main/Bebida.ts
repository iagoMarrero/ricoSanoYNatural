export class Bebida{
    private nombre : string

    public setNombre(unNombre:string){
        this.nombre = unNombre
    }
    
    public getNombre() : string {
        return this.nombre
    }
}