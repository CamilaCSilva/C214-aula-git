const Pessoa = idade => ({
  idade,
  printIdade: () => console.log(idade),
  calculaAnoNascimento: () => console.log(2022-idade)
});

const pessoa = Pessoa(21);
pessoa.printIdade();
pessoa.calculaAnoNascimento();