import { CalificacionPlan } from "../main/CalificacionPlan.enum";
import { Objetivo } from "../main/Objetivo";
import { PlanAlimenticio } from "../main/PlanAlimenticio";

test("Requerimiento EXCELENTE",() =>{

    const planAlimenticio = new PlanAlimenticio()

    var primerObjetivo = new Objetivo()
    var segundoObjetivo = new Objetivo()
    var terceroObjetivo = new Objetivo()
    var cuartoObjetivo = new Objetivo()

    primerObjetivo.alcanzado()
    segundoObjetivo.alcanzado()
    terceroObjetivo.alcanzado()
    cuartoObjetivo.alcanzado()

    planAlimenticio.agregarObjetivo(primerObjetivo);
    planAlimenticio.agregarObjetivo(segundoObjetivo);
    planAlimenticio.agregarObjetivo(terceroObjetivo);
    planAlimenticio.agregarObjetivo(cuartoObjetivo);

expect(planAlimenticio.calcularResultado()).toBe(CalificacionPlan.EXCELENTE)

});

test("Requerimiento1 MUY BUENA",() =>{

    const planAlimenticio = new PlanAlimenticio()

    var primerObjetivo = new Objetivo()
    var segundoObjetivo = new Objetivo()
    var terceroObjetivo = new Objetivo()
    var cuartoObjetivo = new Objetivo()

    primerObjetivo.alcanzado()
    segundoObjetivo.alcanzado()
    terceroObjetivo.alcanzado()

    planAlimenticio.agregarObjetivo(primerObjetivo);
    planAlimenticio.agregarObjetivo(segundoObjetivo);
    planAlimenticio.agregarObjetivo(terceroObjetivo);
    planAlimenticio.agregarObjetivo(cuartoObjetivo);

expect(planAlimenticio.calcularResultado()).toBe(CalificacionPlan.MUY_BUENA)

});

test("Requerimiento1 BUENA",() =>{

    const planAlimenticio = new PlanAlimenticio()

    var primerObjetivo = new Objetivo()
    var segundoObjetivo = new Objetivo()
    var terceroObjetivo = new Objetivo()
    var cuartoObjetivo = new Objetivo()

    primerObjetivo.alcanzado()
    segundoObjetivo.alcanzado()

    planAlimenticio.agregarObjetivo(primerObjetivo);
    planAlimenticio.agregarObjetivo(segundoObjetivo);
    planAlimenticio.agregarObjetivo(terceroObjetivo);
    planAlimenticio.agregarObjetivo(cuartoObjetivo);

expect(planAlimenticio.calcularResultado()).toBe(CalificacionPlan.BUENA)

});

test("Requerimiento1 REGULAR",() =>{

    const planAlimenticio = new PlanAlimenticio()

    var primerObjetivo = new Objetivo()
    var segundoObjetivo = new Objetivo()
    var terceroObjetivo = new Objetivo()
    var cuartoObjetivo = new Objetivo()

    primerObjetivo.alcanzado()

    planAlimenticio.agregarObjetivo(primerObjetivo);
    planAlimenticio.agregarObjetivo(segundoObjetivo);
    planAlimenticio.agregarObjetivo(terceroObjetivo);
    planAlimenticio.agregarObjetivo(cuartoObjetivo);

expect(planAlimenticio.calcularResultado()).toBe(CalificacionPlan.REGULAR)

});