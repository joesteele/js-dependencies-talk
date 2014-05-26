define(function(require) {
  var Car     = require('models/car'),
      Audi    = require('models/audi'),
      BMW     = require('models/bmw'),
      Ferrari = require('models/ferrari');

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
    $('.race').remove();
    $('body').prepend(new Race().$el);
  }

  return Race;
});
