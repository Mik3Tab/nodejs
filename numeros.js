const Logger = require('logplease');
const pintar = Logger.create('utils');

exports.esPar = (n) =>{ //Exporto la función
if(n%2==0){
    return pintar.info("El número es par");
}else{
    return pintar.error("El número es impar");
}
}
