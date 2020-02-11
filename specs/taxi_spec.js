const assert = require('assert');
const Taxi = require('../taxi.js');

describe('Taxi', function() {
  beforeEach(function(){
    taxi = new Taxi('Skoda', 'Rapid', 'Jane');
  });

  it('should have a manufacturer', function(){
    const actual = taxi.manufacturer;
    const expected = 'Skoda';
    assert.strictEqual(actual, expected);

  });

  it('should have a model', function(){
    const actual = taxi.model;
    const expected = 'Rapid';
    assert.strictEqual(actual, expected);
  });

  it('should have a driver', function(){
    const actual = taxi.driver;
    assert.strictEqual(actual, 'Jane');
  });


  describe('passengers', function(){
    it('should start with no passengers', function(){
      const actual = taxi.passengers;
      assert.deepStrictEqual(actual, []);
    });

    it('should return number of passengers', function(){
      const actual = taxi.numPassengers();
      assert.deepStrictEqual(actual, 0);
    });

    it('should be able to add a passenger', function(){
      taxi.addPassenger('Alan');
      const actual = taxi.numPassengers();
      const expected = 1;
      assert.strictEqual(actual,expected);
    });

    it('should be able to remove passenger by name', function(){
      taxi.addPassenger('Alan');
      taxi.addPassenger('Iain');
      taxi.removePassengerByName('Alan');
      const actual = taxi.numPassengers();
      const expected = 1;
      assert.strictEqual(actual,expected);
    });

    it('should be able to remove all passengers', function(){
      taxi.addPassenger('Alan');
      taxi.addPassenger('Iain');
      taxi.addPassenger('John');
      taxi.addPassenger('Peter');
      taxi.removeAllPassengers();
      const actual = taxi.numPassengers();
      const expected = 0;
      assert.strictEqual(actual,expected);
    });
  });

});
