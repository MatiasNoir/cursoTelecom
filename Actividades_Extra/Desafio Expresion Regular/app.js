
// Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
// contraseña segura pero con las siguientes característica, que esta debe contener: 
// 1) Que tenga una longitud de 12 caracteres mínimo.
// 2) Debe contener al menos 1 letra en mayúscula.
// 3) Debe contener al menos 1 letra en minúscula.
// 4) No puede contener espacios vacíos.

// ^ = Comienzo del string
// (?=.*) = Puede empezar con cualquier cosa
// (?=.*[a-z]) = Debe contener al menos 1 letra en minúscula
// (?=.*[A-Z]) = Debe contener al menos 1 letra en mayúscula
// [0-9a-zA-Z] {12,} = Que tenga una longitud de 12 caracteres mínimo
// $ = Fin del string

//Expresion regular final:
// /^(?=.*)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{12,}$/ 

//Hice pruebas en: https://regexr.com/ y https://regex101.com/

//Yo interprete que los caracteres pueden ser texto o numeros (por eso se puede si se quiere ingresar numeros!)