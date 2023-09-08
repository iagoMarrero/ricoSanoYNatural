import { Comida } from "../main/Comida";
import { PlanAlimenticio } from "../main/PlanAlimenticio";
import { TipoComida } from "../main/TipoComida.enum";

test("Rquerimiento 3",() => {
    const planAlimenticio = new PlanAlimenticio()
    const primerComida = new Comida()
    const segundaComida = new Comida()
    const tercerComida = new Comida()
    const cuartaComida = new Comida()

    planAlimenticio.agregarComida(primerComida)
    planAlimenticio.agregarComida(segundaComida)
    planAlimenticio.agregarComida(tercerComida)
    planAlimenticio.agregarComida(cuartaComida)

    primerComida.setTipoDeLaComida(TipoComida.DESAYUNO)
    segundaComida.setTipoDeLaComida(TipoComida.ALMUERZO)
    tercerComida.setTipoDeLaComida(TipoComida.MERIENDA)
    cuartaComida.setTipoDeLaComida(TipoComida.CENA)

expect(planAlimenticio.cantDeComidasSegunTipo(TipoComida.DESAYUNO,TipoComida.MERIENDA)).toBe(2)

});