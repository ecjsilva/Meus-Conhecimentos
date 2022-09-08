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

class navaDeTransporte extends nave {
  speedUp(aceleration) {
    this.currentVelocity += aceleration;
    if (this.currentVelocity > 1) {
      this.currentVelocity = 1;
      alert("Essa nave é de transporte, a velocidade é de 1km/s");
    }
  }
}

let fire = new navaDeTransporte("Fire", 1, 100);

fire.speedUp(100);
console.log(fire);
