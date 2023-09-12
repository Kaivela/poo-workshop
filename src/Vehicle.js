class Vehicle {
  constructor(name, color, wheels) {
    this.color = color;
    this.name = name;
    this.wheels = wheels;
  }

  getPropsString() {
    return `Color: ${this.color}, Vehicle Model: ${this.name}, Number of wheels: ${this.wheels}`;
  }

  logTypeAndProps() {
    console.log(`Vehicle specs : ${this.getPropsString()}`);
  }
}

export default Vehicle;
