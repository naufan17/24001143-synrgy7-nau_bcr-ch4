class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="px-4 py-4 border-2 rounded-lg lg:px-6 lg:py-6">
        <div class="flex items-center justify-center mb-6">
          <img src="${this.image}" class="object-cover object-top md:h-80 md:w-auto" alt="Car"/>
        </div>
        <p class="mb-3 font-sans text-base text-justify">
          ${this.manufacture}/${this.type}
        </p>
        <h3 class="mb-3 text-base font-bold font-sans">
          RP ${this.rentPerDay} / hari
        </h3>
        <p class="mb-3 font-sans text-base text-justify">
          ${this.description}
        </p>
        <ul class="space-y-3">
          <li class="flex text-base font-sans">
            <span class="mr-4">
              <i data-feather="users" class="w-5"></i>
            </span>
            ${this.capacity} orang
          </li>
          <li class="flex text-base font-sans">
            <span class="mr-4">
              <i data-feather="settings" class="w-5"></i>
            </span> 
            ${this.transmission}
          </li>
          <li class="flex text-base font-sans">
            <span class="mr-4">
              <i data-feather="calendar" class="w-5"></i>
            </span>
            ${this.year}
          </li>
        </ul>
        <div class="flex items-center justify-center mt-6">
          <a href="" class="inline-flex items-center justify-center h-12 px-16 sm:px-28 font-semibold font-sans text-white rounded bg-green-500 hover:bg-green-600">
            Pilih Mobil
          </a>  
        </div>
      </div>

    `;
  }
}