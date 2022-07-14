//FLUJO DE CAJA

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

//inicializo las variables total ingreso y total egresos
let TotalIngresos = 0;
let TotalEgresos = 0;

//recorro el vector (de 0 a 11 -> de enero a diciembre)
//en cada iteracion voy acumulando los ingresos y egresos en las variables TotalIngresos y TotalEgresos
for (let i = 0; i < FlujoDeCaja.length; i++) {
    let Actual = FlujoDeCaja[i];
    TotalIngresos += Actual.ingresos;
    TotalEgresos += Actual.egresos;
}
//Si el total de ingresos es menor que el total de egresos, significa que hay perdidas.
if (TotalIngresos < TotalEgresos) {
    alert("El flujo de caja genera pérdidas");
} else {
    alert("El flujo de caja no genera pérdidas");
}
