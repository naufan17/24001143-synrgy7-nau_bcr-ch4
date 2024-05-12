class App {
  constructor() {
    this.carContainerElement = document.getElementById("car-container");
    this.submitButton = document.getElementById("submit-btn");
    this.driverInput = document.getElementById("driver")
    this.dateInput = document.getElementById("date")
    this.timeInput = document.getElementById("time")
    this.capacityInput = document.getElementById("capacity")
  }

  async init() {
    await this.load();

    this.submitButton.onclick = () => {
      this.clear();
      this.filter();
    }
  }

  filter = async () => {
    const driver = this.driverInput.value;
    const date = this.dateInput.value;
    const time = this.timeInput.value;
    const capacity = this.capacityInput.value;

    await this.loadFilter(driver, date, time, capacity);
  }

  run = async () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();

    Car.init(cars);
  }

  async loadFilter(driver, date, time, capacity) {
    const dateTime = new Date(`${date}T${time}Z`);

    const cars = await Binar.listCars(car =>
      car.available && 
      car.driverType === driver &&
      car.availableAt <= dateTime &&
      car.capacity >= capacity
    );

    Car.init(cars);
    this.run();
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}