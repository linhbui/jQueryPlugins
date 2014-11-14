$.Thumbnails = function (el) {
     this.$el = $(el);   
     this.$images = $(".gutter-images").children();
     this.$activeImg = this.$images.eq(0);
     this.activate(this.$activeImg);
     this.gutterIdx = 0;
     this.fillGutterImages();
     var len = this.$images.length;
     this.$el.on('click', '.gutter-images img', function(event) {
         var current = $(event.currentTarget);
         this.$activeImg = current;
         this.activate(current);
     }.bind(this));
     
     this.$el.on('mouseenter', '.gutter-images img', function(event) {
         var current = $(event.currentTarget);
         this.activate(current);
     }.bind(this));
     
     this.$el.on('mouseleave', '.gutter-images img', function(event) {
         this.activate(this.$activeImg);
     }.bind(this));
     
     this.$el.on('click', '.nav.right-nav', function(event) {
         if (this.gutterIdx < len - 5) {
             this.gutterIdx += 1;
             this.fillGutterImages();
         }
     }.bind(this));
     
     this.$el.on('click', '.nav.left-nav', function(event) {
         if (this.gutterIdx > 0) {
             this.gutterIdx -= 1;
             this.fillGutterImages();
         }
     }.bind(this));
     

};

$.Thumbnails.prototype.fillGutterImages = function () {
    $(".gutter-images").empty();
    
    this.$images.slice(this.gutterIdx, this.gutterIdx + 5).each( function () {
        $(".gutter-images").append(this);
    })
}

$.Thumbnails.prototype.activate = function($img) {
    $('div.active').empty();
    $clonedImg = $img.clone();
    $('div.active').append($clonedImg);
}

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};

