//Declaro las variables y se las pido al usuario:
let costosFijos = prompt("Ingrese los Costos Fijos");
let precioVenta = prompt("Ingrese el Precio de Venta");
let costosVariables = prompt("Ingrese los Costos Variables");
//Realizo el calculo una vez que tengo todas las variables necesarias

let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
//Muestro el resultado del calculo con un alert
// alert("El punto de equilibrio es " + puntoEquilibrio);

//O con: console.log("El punto de equilibrio es "+ PuntoEquilibrio);

//O con: document.write("EJERCICIO 1: El punto de equilibrio es: " + puntoEquilibrio);