import Vehicle from "./Vehicle";

class Motorcycle extends Vehicle {
  constructor(name, color) {
    super(name, color, 2);
  }

  logTypeAndProps() {
    console.log(`Motorcycle specs : ${this.getPropsString()}`);
  }
}

export default Motorcycle;
