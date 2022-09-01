const Calculadora = require('./src/calculadora');

let soma = Calculadora.soma(1, 'a');
let subtracao = Calculadora.subtracao(4, true);
let multiplicacao = Calculadora.multiplicacao(8, 6);
let divisao = Calculadora.divisao(8, 2);
let exponenciacao = Calculadora.exponenciacao(8, 3);

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(exponenciacao);