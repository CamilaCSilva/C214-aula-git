const validate = require('validate.js');
const numero = require('./validate');

const Calculadora = {
  soma(num1, num2) {
    const validaNum1 = validate({ num1, num2 }, numero.numero);
    if(validaNum1!==undefined){
      return 'Error';
    }
    return num1+num2;
  },

  subtracao(num1, num2) {
    const validaNum1 = validate({ num1, num2 }, numero.numero);
    if(validaNum1!==undefined){
      return 'Error';
    }
    if(num1 > num2){
      return num1-num2;
    }
    else {
      return num2-num1;
    }
  },

  multiplicacao(num1, num2) {
    const validaNum1 = validate({ num1, num2 }, numero.numero);
    if(validaNum1!==undefined){
      return 'Error';
    }
    return num1*num2; 
  },

  divisao(num1, num2) {
    const validaNum1 = validate({ num1, num2 }, numero.numero);
    if(validaNum1!==undefined){
      return 'Error';
    }
    if(num2 !== 0){
      return num1/num2; 
    }
    return 'Divisão por 0 não é possível!';
  },

  exponenciacao(num1, num2) {
    const validaNum1 = validate({ num1, num2 }, numero.numero);
    if(validaNum1!==undefined){
      return 'Error';
    }
    return num1**num2; 
  },
};

module.exports = Calculadora;