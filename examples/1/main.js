(function() {
  function Car(el) {
    this.$el = $(el);
    this.width = this.$el.width();

    this.speed = 50;

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
        setTimeout(function() {
          car.$el.css({left: 0});
        }, Car.resetDelay);
      }
    });
  }

  $('.car').each(function() {
    new Car(this);
  });
})();
