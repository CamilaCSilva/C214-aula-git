class Pessoa {
  constructor(idade){
    this.idade = idade;
  }

  printIdade(){
    console.log(this.idade);
  }

  calculaAnoNascimento(){
    console.log(2022-this.idade);
  }
}

const pessoa = new Pessoa(21);
pessoa.printIdade();
pessoa.calculaAnoNascimento();