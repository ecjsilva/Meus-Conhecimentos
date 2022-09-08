class Weapon {
  constructor(identifier) {
    this.identifier = identifier;
    this.shots = 5;
  }

  shoot() {
    if (this.shots > 0) {
      console.log("Bang!");
      this.shots -= 1;
    } else {
      throw new Error("Arma " + this.identifier + " sem munição");
    }
  }
}

let pistol = new Weapon("pistol");

pistol.shoot();
pistol.shoot();
pistol.shoot();
pistol.shoot();
pistol.shoot();
pistol.shoot();
console.log(pistol);
