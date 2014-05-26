define(['models/car'], function(Car) {
  $.extend(Audi.prototype, Car.prototype);

  function Audi(el) {
    Car.call(this, el);
    this.$el.addClass('audi');
    this.speed = 100;
  }

  return Audi;
});
