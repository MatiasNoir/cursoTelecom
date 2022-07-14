//USAR FUNCIONES

//armo el vector Flujo de Caja, donde cada elemento representa un mes, con sus respectivo ingresos y egresos.
let FlujoDeCaja = [
    {
        periodo: "Enero",
        ingresos: 1500,
        egresos: 1500
    },
    {
        periodo: "Febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "Marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "Abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "Mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "Junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "Julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "Agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "Septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "Octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "Noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "Diciembre",
        ingresos: 3843,
        egresos: 348133
    },
];

function VerificarFlujoDeCaja() {
    //inicializo las variables donde voy a acumular el total de ingresos y egresos en 0
    let TotalIngresos = 0;
    let TotalEgresos = 0;
    //recorro todo el vector y voy acumulando los ingresos y egresos
    for (let i = 0; i < FlujoDeCaja.length; i++) {
        let Actual = FlujoDeCaja[i];
        TotalIngresos += Actual.ingresos;
        TotalEgresos += Actual.egresos;
    }
    //verifico si el ingreso fue mayor o menor para devolver si hubo ganancia o perdida
    if (TotalIngresos > TotalEgresos)
        return 1; //Hay ganancia
    else if (TotalIngresos < TotalEgresos)
        return -1; //Hay perdida
    else
        return 0; //Igualidad
}

console.log(VerificarFlujoDeCaja());