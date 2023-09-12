import Vehicle from "./Vehicle";

class Car extends Vehicle {
  constructor(name, color) {
    super(name, color, 4);
  }

  logTypeAndProps() {
    console.log(`Car specs : ${this.getPropsString()}`);
  }
}

export default Car;
