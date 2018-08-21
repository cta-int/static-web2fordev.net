function MobileMenu(options) {
    options = options || {};
    this.options = jQuery.extend(MobileMenu.defaultOptions, options);
    this.init(options);
}

MobileMenu.defaultOptions = {
    'container': '.mobile-menu',
    'minus-class': 'glyphicon-minus',
    'plus-class': 'glyphicon-plus',
    'dropdown': '.dropdown'
};

MobileMenu.prototype.init = function() {
    var self = this;
    jQuery.noConflict()(function($) {
        self.options.$container = $(self.options.container);
        self.options.$container.find(self.options['dropdown']).on('show.bs.dropdown', function() {
            self.onToggle($(this).find('.dropdown-toggle'));
        });
        self.options.$container.find(self.options['dropdown']).on('hide.bs.dropdown', function() {
            self.onToggle($(this).find('.dropdown-toggle'));
        });
    });
};

MobileMenu.prototype.onToggle = function($togglebtn) {
    $togglebtn.toggleClass(this.options['minus-class']);
    $togglebtn.toggleClass(this.options['plus-class']);
};