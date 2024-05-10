class App {
  constructor() {
    this.carContainerElement = document.getElementById("car-container");
    this.submitButton = document.getElementById("submit-btn");
    this.filterDriver = document.getElementById("driver")
    this.filterDate = document.getElementById("date")
    this.filterTime = document.getElementById("time")
    this.filterCapacity = document.getElementById("capacity")
  }

  async init() {
    await this.load();

    this.submitButton.onclick = () => {
      this.clear();
      this.filter();
    }
  }

  filter = async () => {
    const driver = this.filterDriver.value;
    const date = this.filterDate.value;
    const time = this.filterTime.value;
    const capacity = this.filterCapacity.value;

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