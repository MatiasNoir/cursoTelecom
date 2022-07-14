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

function AgregarInteres(Ofertas) {
    //creo el vector
    let OfertasConInteres = [];
    //recorro el vector ofertas y voy pasando sus elementos a la variable Plan
    for (let i = 0; i < Ofertas.length; i++) {
        let Plan = Ofertas[i];
        let Interes = (Plan.capital * Plan.plazo * Plan.tasa) / 100;
        //agrego al vector vacio cada uno de los elementos, y al final su INTERES (que lo calcule anteriormente)
        OfertasConInteres.push({
            nombre: Plan.nombre,
            capital: Plan.capital,
            plazo: Plan.plazo,
            tasa: Plan.tasa,
            interes: Interes,
        });
    }
    return OfertasConInteres;
}
//este console.log muestra todas las ofertas, con su respectivo interes
console.log(AgregarInteres(Ofertas));