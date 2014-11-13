$.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = $(this.$contentTabs.find(".active"));
    var id = this.$activeTab.attr('id');
    // debugger;
    this.$activeLink = $('a[href=#' + id + ']');
    this.$el.on('click', 'a', this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function (event) {
    event.preventDefault();
    this.$activeTab.removeClass("active");
    this.$activeLink.removeClass("active");
    this.$activeLink = $(event.currentTarget);
    this.$activeTab = this.$contentTabs.find(this.$activeLink.attr('href'));
    this.$activeTab.addClass("active");
    this.$activeLink.addClass("active");
};


$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

