// EJERCICIO:
// Cree una función llamada  function gastoConIva() que acepte un número 
//y devuelva ese número más el 21% que es el valor del IVA.

// Luego crea una function map() que tome dos entradas o parámetros:
// un array de como valores números. 
// una función callback: esta función se aplica a cada elemento del array (dentro de la función map().

// Haga que su function map() devuelva una nueva matriz llena de números
// que son el resultado de usar la función callback en cada elemento de la matriz de entrada.



function gastoConIva(num) {
    let IVA = (num * (21 / 100));
    return IVA;
}
//prueba
gastoConIva(200);

function mapeo(vector) {
    var nuevoVector = [];
    if (Array.isArray(vector) === true) {
        var nuevoVector = JSON.parse(JSON.stringify(vector)); //creo el nuevo vector, que tiene los mismos elemntos que el vector original
        return nuevoVector;
    } else {
        return ("El parametro ingresado no es un vector");
    }
}
//No supe como devolver el array de entrada como matriz, como pide el ejercicio, creo que no lo estoy interpretando bien.

//Encontre este ejercicio que intenta resolver algo similar en stackoverflow, pero lo que hace es: ingresa un vector, o varios, y los devuelve a cada
// elementos de dicho vector como matriz columna de tamaño 1, lo dejo pq me parecio interesante!

//https://stackoverflow.com/questions/49320668/how-to-convert-single-dimension-array-into-a-column-vector-in-js



