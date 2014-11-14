$.Carousel = function (el) {
    this.$el = $(el);
    this.$images = $('.items').children();
    this.$activeIdx = 0;
    this.$el.on('click', 'a.slide-left', function (event) {
        this.slide(-1);
    }.bind(this));
    this.$el.on('click', 'a.slide-right', function (event) {
        this.slide(1)
    }.bind(this));
};

$.Carousel.prototype.slide = function(dir) {
    // old image
    if (this.transitioning) { return }
    this.transitioning = true
    var current = this.$images.eq(this.$activeIdx);
    
    dir === 1 ? current.addClass("left") : current.addClass("right");

    // set new idx
    this.$activeIdx += dir;
    var len = this.$images.length;
    
    if(this.$activeIdx < 0) {
        this.$activeIdx = len - 1;
    } else if(this.$activeIdx >= len) {
        this.$activeIdx = this.$activeIdx % len;
    }
    // var len = this.$images.length;
    // if (Math.abs(this.$activeIdx) === len) {
    //     this.$activeIdx = 0;
    // }
    console.log(this.$activeIdx)

    //new image
    var next = this.$images.eq(this.$activeIdx);
    next.addClass("active");
    dir === 1 ? next.addClass("right") : next.addClass("left");
    
    next.on('transitionend', function () {
      current.removeClass('active left right');
      this.transitioning = false
    }.bind(this));
    
    setTimeout(function() {
      next.removeClass("right").removeClass("left");
    }, 0);
}

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};