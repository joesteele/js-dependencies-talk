define(['models/car'], function(Car) {
  $.extend(Ferrari.prototype, Car.prototype);

  function Ferrari(el) {
    Car.call(this, el);
    this.$el.addClass('ferrari');
    this.speed = 200;
  }

  return Ferrari;
});
