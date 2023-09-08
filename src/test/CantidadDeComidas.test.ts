import { Comida } from "../main/Comida";
import { PlanAlimenticio } from "../main/PlanAlimenticio";

test("Requerimiento 2",() =>{
    const planAlimenticio = new PlanAlimenticio()
    const primerComida = new Comida()
    const segundaComida = new Comida()
    const tercerComida = new Comida()
    const cuartaComida = new Comida()

    planAlimenticio.agregarComida(primerComida)
    planAlimenticio.agregarComida(segundaComida)
    planAlimenticio.agregarComida(tercerComida)
    planAlimenticio.agregarComida(cuartaComida)

expect(planAlimenticio.cantidadDeComida()).toBe(4)

});