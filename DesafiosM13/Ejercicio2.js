//defino el vector Ofertas con las 3 ofertas ofrecidas
let Ofertas = [
    {
        nombre: "Plan001",
        capital: 150000,
        plazo: 30,
        tasa: 0.15
    },
    {
        nombre: "Plan002",
        capital: 300000,
        plazo: 180,
        tasa: 0.1
    },
    {
        nombre: "Plan003",
        capital: 485000,
        plazo: 60,
        tasa: 0.23,
    }
];

//creo el nuevo vector en donde voy a calcular el interes de cada plan
let OfertasConInteres = [];


//formula para calcular el interes: Interés = (Capital * Plazo * Tasa) / 100

for (let i = 0; i < Ofertas.length; i++) {
    let Plan = Ofertas[i];
    let Interes = (Plan.capital * Plan.plazo * Plan.tasa) / 100;
    //agrego el nombre del plan, y el interes que me va generar en el nuevo vector
    OfertasConInteres.push({
        nombre: Plan.nombre,
        interes: Interes,
    });
}
//No se como mostrarlo en el HTML, tanto con document.write como con alert, muestra Object.
//document.write(OfertasConInteres);
//Mostrandolo por consola:
console.log(OfertasConInteres);
