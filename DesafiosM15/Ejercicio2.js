
function calcular() {
    const ingresos = document.getElementById("ingresos").value;

    document.getElementById('gastos_necesarios').innerHTML = (ingresos * 0.5);
    document.getElementById('gastos_opcionales').innerHTML = (ingresos * 0.3);
    document.getElementById('ahorro_inversion').innerHTML = (ingresos * 0.2);


}
