(function() {
	
	var gallery = angular.module('gallery', []);
	
	//Controller to check the current gallery
	// this control will be called in another module in app.js
	// store as dependency of this gallery
	gallery.controller('GalleryController', function(){
	    this.current = 0;
	    this.setCurrent = function(setCurrent)
	    {
	      	if(setCurrent === null)
	          {
	              this.current = 0;
	          }
	        else
	              this.current = setCurrent;
	    };
	 });

})();