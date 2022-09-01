class Veiculo {
  #placa;
  #ano;

  constructor(placa, ano){
    this.#placa = placa;
    this.#ano = ano;
  }

  setPlaca(placa){
    this.#placa = placa;
  }

  setAno(ano){
    this.#ano = ano;
  }

  getPlaca(){
    return this.#placa;
  }

  getAno(){
    return this.#ano;
  }

  exibirDados(){
    console.log("-----------------------------------");
    console.log(`Número da placa: ${this.getPlaca()}`);
    console.log(`Ano: ${this.getAno()}`);
  }
  
}

class Caminhao extends Veiculo {
  #eixos;

  constructor(placa, ano, eixos){
    super(placa, ano);
    this.#eixos = eixos;
  }

  setEixos(eixos){
    this.#eixos = eixos;
  }

  getEixos(){
    return this.#eixos;
  }

  exibirDados(){
    console.log("-----------------------------------");
    console.log(`Número da placa: ${this.getPlaca()}`);
    console.log(`Ano: ${this.getAno()}`);
    console.log(`Número de eixos: ${this.getEixos()}`);
  }
}

class Onibus extends Veiculo {
  #assentos;

  constructor(placa, ano, assentos){
    super(placa, ano);
    this.#assentos = assentos;
  }

  setAssentos(assentos){
    this.#assentos = assentos;
  }

  getAssentos(){
    return this.#assentos;
  }

  exibirDados(){
    console.log("-----------------------------------");
    console.log(`Número da placa: ${this.getPlaca()}`);
    console.log(`Ano: ${this.getAno()}`);
    console.log(`Número de assentos: ${this.getAssentos()}`);
  }
}

const veiculo1 = new Veiculo('ABCD1234', 1980);
veiculo1.exibirDados();

const busao = new Onibus('ABCD1234', 1980, 80);
busao.exibirDados();

const caminhao1 = new Caminhao('ABCD1234', 1980, 4);
caminhao1.exibirDados();
