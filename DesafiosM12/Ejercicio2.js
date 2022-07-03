//Pido el usuario y la contraseña
let user = prompt("Nombre de usuario:");
let password = prompt("Contraseña:");

//Si el usuario Y la contraseña coinciden, entra, sino error.
if (user == "admin" && password == "1234") {
    alert("Se ha logeado con exito!");
} else {
    alert("Error!");
}