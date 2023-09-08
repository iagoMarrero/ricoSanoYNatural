import { Bebida } from "../main/Bebida";
import { Colacion } from "../main/Colacion";
import { PlanAlimenticio } from "../main/PlanAlimenticio";

test("requerimiento 6",() => {
    const planAlimenticio = new PlanAlimenticio()
    const unaColacion = new Colacion()
    const otraColacion = new Colacion()

    planAlimenticio.agregarUnaColacion(unaColacion)
    planAlimenticio.agregarUnaColacion(otraColacion)

    expect(planAlimenticio.cantDeColacionesPermitidas()).toBe(2)
});

test("requerimiento 7",() => {
    const planAlimenticio = new PlanAlimenticio()
    const unaBebida = new Bebida()
    const otraBebida = new Bebida()

    planAlimenticio.agregarUnaBebida(unaBebida)
    planAlimenticio.agregarUnaBebida(otraBebida)
    expect(planAlimenticio.cantDeBebidasPermitidas()).toBe(2)
});