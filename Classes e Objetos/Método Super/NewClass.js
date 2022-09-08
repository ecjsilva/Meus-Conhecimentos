class nave {
  constructor(name, maxCrew, maxVelocityRecommended) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxVelocityRecommended = maxVelocityRecommended;
    this.currentVelocity = 0;
  }

  speedUp(aceleration) {
    this.currentVelocity += aceleration;
    if (this.currentVelocity > this.maxVelocityRecommended) {
      alert("Você esta acima da velocidade permitida, pode prejudicar a nave");
    }
  }
}

class naveDeTransporte extends nave {
  constructor(name, maxCrew, maxVelocityRecommended, CargaMax) {
    super(name, maxCrew, maxVelocityRecommended);
    this.CargaMax = CargaMax;
  }

  speedUp(aceleration) {
    this.currentVelocity += aceleration;
    if (this.currentVelocity > 105) {
      aceleration /= 2;
      alert("Velocidade reduzida para " + this.currentVelocity + "Km/s");
    }
  }
}

let fire = new naveDeTransporte("Fire", 1, 100);

fire.speedUp(150);
console.log(fire);
