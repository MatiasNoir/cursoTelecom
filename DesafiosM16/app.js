//--- Ejercicio 1
//Realizar una funcion llamada Producto (que tenga id,nombre,precio y stock)
//Debe devolver un objeto con dichos campos

let producto = function (id, nombre, precio, stock) {
    return {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock,
    }
}
console.log(producto);

//--- Ejercicio 2
// Realizar una funcion llamada carrito (que permita: incrementar cantidad de un producto, agregar nuevo producto,
// quitar un producto ya existente, y obtener un reporte con el precio total y detalles)

let carrito = function () {
    //la carga del carrito se inicializa
    let carga = [];
    //busco un producto en el carrito, si ya se encuentra, aumento su cantidad en 1
    function incrementar(producto) {
        carga = carga.map(function (value) {
            if (value.producto.id == producto.id) {

                return {
                    producto: value.producto,
                    cantidad: value.cantidad + 1,
                }
            }
            else
                return value;
        });
    }
    //agrego al vector "carga" un "producto" (con el metodo push, se agrega dicho elemento al inicio del vector)
    function agregar(producto) {
        carga.push({
            producto: producto,
            cantidad: 1,
        });
    }
    //para quitar un producto, uso el filter, re-armando el vector, y quitando el producto filtrado
    function quitar(producto) {
        carga = carga.filter(function (value) {
            return value.producto.id !== producto.id
        });
    }
    //para el reporte, necesito calcular el precio total y mostrar los detalles.
    //para el precio total, solamente necesito acumular los precios (y sus cantidades).

    function reporte() {

        let precioTotal = carga.reduce(function (precio, value) {
            return precio + (value.producto.precio * val.cantidad)
        }, 0);

        //normalmente en los detalles de una compra se muestra: nombre,precio unitario, su cantidad,y el total al final.
        let detalle = carga.map(function (value) {
            return {
                nombre: value.producto.nombre,
                precioUnitario: value.producto.precio,
                cantidad: value.cantidad,
                total: value.cantidad * value.producto.precio,
            }
        });
        return {
            precioTotal,
            detalle,
        };
    }

    return {
        incrementar: incrementar,
        agregar: agregar,
        quitar: quitar,
        reporte: reporte,
    }
}