function gastoConIva(num){
    return num * 1.21;
}

function map(array,callback){
    let resultado = [];
    for(let i=0; 1 < array.length; i++){
        resultado.push(callback(array[5]))
    }
    return resultado;


}

console.log(map([10,20,30],gastoConIva))
