define(function() {
  function Car(el) {
    this.$el = $(this.render());
    this.width = this.$el.width();

    this.speed = 50;

    this.reset = $.proxy(this.reset, this);
    this.$el.on('click', $.proxy(this.drive, this));
  }

  Car.baseDuration = 2000;
  Car.resetDelay = 1000;

  Car.prototype.drive = function() {
    var car = this;
    var duration = Car.baseDuration / car.speed * 100;
    car.$el.velocity({
      left: $('body').width() + car.width
    }, {
      duration: duration,
      complete: function() {
        setTimeout(car.reset, Car.resetDelay);
      }
    });
  }

  Car.prototype.reset = function() {
    this.$el.css({left: 0});
  }

  Car.prototype.render = function() {
    return "<div class='car'>"
         + "  <div class='top'></div>"
         + "  <div class='body'></div>"
         + "  <div class='wheel wheel-left'></div><div class='wheel wheel-right'></div>"
         + "</div>";
  }

  return Car;
});
