//Pido el total de ingresos
let ingresos = prompt("Ingrese el monto de sus ingresos: ");

//Calculo cada categoria
let gastosNecesarios = ingresos * 0.5;
let gastosOpcionales = ingresos * 0.3;
let ahorroInversion = ingresos * 0.2;

//Muestro el resultado del calculo con alert
/* 
alert("Distribución de sus ingresos: ");
alert("Gastos necesarios: "+ gastosNecesarios);
alert("Gastos opcionales: "+ gastosOpcionales);
alert("Ahorro e inverisón: "+ ahorroInversion);
*/

/* 
console.log("Distribución de sus ingresos: ");
console.log("Gastos necesarios: "+ gastosNecesarios);
console.log("Gastos opcionales: "+ gastosOpcionales);
console.log("Ahorro e inverisón: "+ ahorroInversion);
*/


document.write("Distribución de sus ingresos: ");
document.write("<br>");
document.write("Gastos necesarios: "+ gastosNecesarios);
document.write("<br>");
document.write("Gastos opcionales: "+ gastosOpcionales);
document.write("<br>");
document.write("Ahorro e inverisón: "+ ahorroInversion);  
  

