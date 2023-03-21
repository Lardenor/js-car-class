class Cars{
    constructor(brand,model,year,carMileage,pricePerDay,freeBusy=true){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carMileage = carMileage;
    this.pricePerDay = pricePerDay;
    this.freeBusy = freeBusy;
    }
 // Метод для виводу загальної інформації про машину
  getInfo() {
    return `${this.brand} ${this.model}, ${this.year} року випуску, пробіг ${this.carMileage} км, ціна за добу ${this.pricePerDay} грн, статус ${this.freeBusy ? 'вільна' : 'зайнята'}`;
  }

  // Метод для зміни пробігу машини
  addMileage(mileage) {
    this.carMileage += mileage;
  }

  // Метод для зміни ціни за добу оренди машини
  changePrice(price) {
    this.pricePerDay = price;
  }
    changeFreeBusyStatus() {
    this.freeBusy = !this.freeBusy;
  }

  // Метод для виводу поточного статусу машини
getStatus() {
    return `${this.brand} ${this.model} - ${this.freeBusy ? 'вільна' : 'зайнята'}`;
}

}

const toyota = new Cars('Toyota', 'Corolla', 2012, 202314, 1099);
const bmw = new Cars('BMW', 'X5', 2015, 120000, 2599);
console.log(toyota.getInfo());
toyota.changeFreeBusyStatus();
console.log(toyota.getStatus());
console.log(toyota.getInfo());
toyota.addMileage(2000);
toyota.changePrice(999);
console.log(toyota.getInfo());
