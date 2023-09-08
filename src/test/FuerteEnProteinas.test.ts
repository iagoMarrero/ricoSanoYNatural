import { Comida } from "../main/Comida";
import { Composicion } from "../main/Composicion";
import { PlanAlimenticio } from "../main/PlanAlimenticio";
import { TipoComida } from "../main/TipoComida.enum";
import { TipoDeComposicion } from "../main/TipoDeComposicion.enum";

test("Requerimiento 4",() => {

    const planAlimenticio = new PlanAlimenticio()
    const comida = new Comida()
    const c1 = new Composicion()
    const c2 = new Composicion()
    const c3 = new Composicion()

    comida.setTipoDeLaComida(TipoComida.ALMUERZO)

    c1.setNombre("milanesa")
    c1.setTipo(TipoDeComposicion.PROTEINA)
    c1.setPorcentajes(100)

    c2.setNombre("")
    c2.setTipo(TipoDeComposicion.VEGETALES)
    c2.setPorcentajes(0)

    c3.setNombre("")
    c3.setTipo(TipoDeComposicion.CARBOHIDRATO)
    c3.setPorcentajes(0)

    comida.agregarComposicion(c1)
    comida.agregarComposicion(c2)
    comida.agregarComposicion(c3)

    planAlimenticio.agregarComida(comida)

expect(planAlimenticio.fuerteEnProteinas()).toBe(true)

});

test("Requerimiento 4",() => {

    const planAlimenticio = new PlanAlimenticio()
    const comida = new Comida()

    const c4 = new Composicion()
    const c5 = new Composicion()
    const c6 = new Composicion()

    comida.setTipoDeLaComida(TipoComida.CENA)

    c4.setNombre("")
    c4.setTipo(TipoDeComposicion.PROTEINA)
    c4.setPorcentajes(0)

    c5.setNombre("Ensalada")
    c5.setTipo(TipoDeComposicion.VEGETALES)
    c5.setPorcentajes(100)

    c6.setNombre("")
    c6.setPorcentajes(0)
    c6.setTipo(TipoDeComposicion.CARBOHIDRATO)

    comida.agregarComposicion(c4)
    comida.agregarComposicion(c5)
    comida.agregarComposicion(c6)

    planAlimenticio.agregarComida(comida)

expect(planAlimenticio.bienVerde()).toBe(true)

});