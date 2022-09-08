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
  reload() {
    this.shots = 5;
  }
}

let pistol = new Weapon("pistol");

try {
  pistol.shoot();
  pistol.shoot();
  pistol.shoot();
  pistol.shoot();
  pistol.shoot();
  pistol.shoot();
} catch (e) {
  console.log("Recarregando arma...");
  pistol.reload();
} finally {
  console.log("5 alvos acertados, boa mira!");
}

console.log(pistol);
