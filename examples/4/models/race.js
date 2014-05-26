(function() {
  var Car     = require('./car'),
      Audi    = require('./audi'),
      BMW     = require('./bmw'),
      Ferrari = require('./ferrari');

  function Race() {
    this.$el = $(this.render());

    this.cars = [];
    this.cars.push(new Car());
    this.cars.push(new Audi());
    this.cars.push(new BMW());
    this.cars.push(new Ferrari());

    var $el = this.$el;
    $.each(this.cars, function(i, car) {
      $el.find('.racetrack').append(car.$el);
    });

    this.$el.find('.race-btn').on('click', $.proxy(this.start, this));
  }

  Race.prototype.start = function() {
    $.each(this.cars, function(index, car) {
      car.drive();
    });
  }

  Race.prototype.render = function() {
    return "<div class='race'>"
         + "  <div class='racetrack'></div>"
         + "  <button class='race-btn'>Race!</button>"
         + "</div>";
  }

  Race.init = function() {
    $('.race-container').html(new Race().$el);
  }

  module.exports = Race;
})();
