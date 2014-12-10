(function() {
	
	// module only to deal with products at the store!!!
	// move them from original point and create dependency of this new one
	var app = angular.module('storeProducts', []);
	
	// Now we can create custom directives
	// Why? Its more useful for future purposes
	app.directive('productTitle', function() {
		return{
			retrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	
	app.directive('productPrice', function() {
		return{
			retrict: 'E',
			templateUrl: 'product-price.html'
		};
	});
	
	app.directive('productDesc', function() {
		return{
			restrict: 'E',
			templateUrl: 'product-desc.html'
		};
	});
	
})();