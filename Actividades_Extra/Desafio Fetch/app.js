// DESAFIO FETCH

// Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch 
// y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios 
// y debe contener las propiedades en sus columnas de Id, name, username, email y address-street.

fetch("https://jsonplaceholder.typicode.com/users").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                //verifico en la consola que me devuelve los 10 usuarios
                if (data.length > 0) {

                    var temp = "";

                    data.forEach((e) => {
                        temp += "<tr>";
                        temp += "<td>" + e.id + "</td>";
                        temp += "<td>" + e.name + "</td>";
                        temp += "<td>" + e.username + "</td>";
                        temp += "<td>" + e.email + "</td>";
                        temp += "<td>" + e.address.street + " " + e.address.suite + "</td></tr>";
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }

)




