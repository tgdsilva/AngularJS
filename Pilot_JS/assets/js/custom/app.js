(function() {
	var app = angular.module('store', ['storeProducts','panelControl','gallery', 'reviews']);
	
	// create controllers
	app.controller('StoreController', [ '$http', function( $http) {
		//this.product = ???;
		var store = this;
		
		// we also need to initialise the page with no errors
		// how?
		store.product = [];
		
		// now we apply the $http.get object
		// with that we get their service provided by a page or whatever we want
		
		$http.get('/pilot_js/assets/js/json/products.json').success(function(data) {
			store.product = data;
			console.log(data);
		});
		
		
	} ]);
	
})();