/* DESAFIO NODE:

1) Crear una API REST fake completa con nada de codificacion
utilizando el modulo json-server, para completar la data fake vamos
a utilizar (https://www.mockaroo.com) con una coleccion que se llame users y que
tenga como propiedades (id, first_name, last_name, email, datetime, ip, country).

2) Luego prueba con la url los metodos para obtener sus datos y realizar las consultas que crea
necesaria aplicando los respectivos filtros que tiene su DB.

3) Configure el script de su package.json para inicializar el servidor con el nombre asignado.

Nota importante: como todo paquete de terceros debemos siempre leer la documentación para enteder
su funcionamiento y eso nos va a servir como guía para poder utilizar el módulo.

*/

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(router)

//hay alguna forma de hacer un metodo personalizado??
//por ejemplo: una operacion que me devuelva solamente las personas que son de "china"
//Si yo ejecuto la aplicacion, y hago esta query:
// >>>        http://localhost:3000/users/?q=China      <<<<
//me devuelvo lo que estoy buscando, pero como lo hago en forma de procedimiento/funcion??


server.listen(port, () => {
  console.log(`JSON Server está funcionando en el puerto ${port} `)
})
