function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.getDetails = function () {
    console.log("Car: " + this.brand + " " + this.model);
};
var car1 = new Car("Toyota", "Fortuner");
var car2 = new Car("Honda", "Civic");
car1.getDetails();
car2.getDetails();
