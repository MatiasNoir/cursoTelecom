
function calcular() {
    let costo_fijo = parseInt(document.getElementById("c_fijo").value);
    let precio_venta = parseInt(document.getElementById("p_venta").value);
    let costo_variable = parseInt(document.getElementById("c_variable").value);

    let PuntoEquilibrio = (costo_fijo / (precio_venta - costo_variable));

    console.log(PuntoEquilibrio);

    document.getElementById('resultado').innerHTML = PuntoEquilibrio;
}

//PuntoEquilibrio = Costos Fijos / ( Precio Venta - Costos Variables )
