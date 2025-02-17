
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
        console.log(RECORD);
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.images == 'object') {
          console.log(rec.images);
          this.loadImages(rec.images);
        };
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
      
      this.loadImages = function(arr) {
        for (var i=0;i<arr.length;i++) {
          var url = '';var title = '';var box=that.dd.name;
          if (typeof(arr[i])=='string') {
            url = arr[i];
            var a = $('<a href="'+url+'" data-lightbox="'+that.dd.name+'" ></a>');
            var b = $('<img src="'+url+'" />');
          } else if (typeof(arr[i])=='object') {
            if (typeof(arr[i].url)!='string') continue;
            url = arr[i].url;
            if (typeof(arr[i].title)=='string') title = arr[i].title;
            if (typeof(arr[i].box)=='string') box = arr[i].box;
            var a = $('<a href="'+url+'" data-lightbox="'+box+'" data-title="'+title+'" ></a>');
            var b = $('<img src="'+url+'" data-title="'+title+'" />');
          } else continue;

          b.appendTo(a);
          a.appendTo(that.element);
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
