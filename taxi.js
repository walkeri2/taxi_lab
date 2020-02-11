const Taxi = function(manufacturer, model, driver){

  this.manufacturer = manufacturer;
  this.model = model;
  this.driver = driver;
  this.passengers = [];
};

Taxi.prototype.numPassengers = function() {
  return this.passengers.length;
};

Taxi.prototype.addPassenger = function (passengerName) {
  this.passengers.push(passengerName);
};

Taxi.prototype.removePassengerByName = function (passengerName) {
  const passengerIndex = this.passengers.indexOf(passengerName);
  this.passengers.splice(passengerIndex, 1);
  // this.passengers.pop(passengerName);
};

Taxi.prototype.removeAllPassengers = function () {
  this.passengers.splice(0, this.passengers.length)
};

module.exports = Taxi;
