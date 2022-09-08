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

class battleNave extends nave {
  stop() {
    this.currentVelocity = 0;
    alert("Reabastecendo");
  }
}

let fire = new battleNave("fire", 40, 120);

fire.speedUp(130);

fire.stop();

console.log(fire);
