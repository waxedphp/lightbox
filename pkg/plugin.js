
;(function ( $, window, document, undefined ) {

    var pluginName = 'lightbox',
        _search = '.waxed-lightbox',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.config == 'object') { rec = rec.config; };
        let cfg = {}; let fnd = false;
        let allowed = ['alwaysShowNavOnTouchDevices', 'albumLabel', 'disableScrolling',
        'fadeDuration', 'fitImagesInViewport', 'imageFadeDuration',
        'maxWidth', 'maxHeight', 'positionFromTop', 'resizeDuration',
        'showImageNumberLabel', 'wrapAround'];
        for (var x in rec) {
          if ($.inArray(x, allowed)>=0) {
            cfg[x] = rec[x]; fnd = true;
          };
        };
        if (fnd) {
          lightbox.option(cfg);
        };
      },


      this.free = function() {

      },

      this.init=function() {
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
