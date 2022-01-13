console.log("Hola Ejercicio 2");

const Logger = require('logplease');
const logueito = Logger.create('utils');

logueito.debug("Hola holita");
logueito.warn('Esto es un aviso');
logueito.error('Esto es un error');
logueito.info('BREAKING NEWS');
