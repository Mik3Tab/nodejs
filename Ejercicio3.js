const Logger = require('logplease');
const logueito = Logger.create('utils');

const par = require('./numeros');
logueito.log(par.esPar(2));

logueito.log(par.esPar(3));
logueito.log(par.esPar(101));
logueito.log(par.esPar(201));
logueito.log(par.esPar(202));
logueito.log(par.esPar(100));



