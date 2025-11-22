class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid trip distance!");
        }

        const ratePerKm = 12;
        return this.distance * ratePerKm;
    }
}
var driver = new Driver("Rohit Sharma", 4.8, "Hyundai i20");
var trip1 = new Trip("Mumbai", "Thane", 22);
var trip2 = new Trip("Delhi", "Noida", -5);

console.log("Driver:", driver.name, "| Vehicle:", driver.vehicle);

try {
    var fare1 = trip1.calculateFare();
    console.log("Fare for Trip 1:", "₹" + fare1);
} catch (error) {
    console.log("Error:", error.message);
}
try {
    var fare2 = trip2.calculateFare();
    console.log("Fare for Trip 2:", "₹" + fare2);
} catch (error) {
    console.log("Error:", error.message);
}
