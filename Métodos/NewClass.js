class carro {
  constructor(marca) {
    this.marca = marca;
    this.velocidade = 0;
  }
  speedUp(aceleracao) {
    this.velocidade += aceleracao;
  }
}

let ford = new carro("Ka");

ford.speedUp(50);
ford.speedUp(100);

console.log(ford);
