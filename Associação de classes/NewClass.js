class Captain {
  constructor(name, age, flighthours) {
    this.name = name;
    this.age = age;
    this.flighthours = flighthours;
  }
}

class Spaceship {
  constructor(name, crewQuantity, captainName, captainAge, captainFlighHours) {
    this.name = name;
    this.crewQuantity;
    this.captain = new Captain(captainName, captainAge, captainFlighHours);
  }
}

let spaceship = new Spaceship("Aéronave FX4039", 40, "Emerson", 20, 15000);

console.log(spaceship);
