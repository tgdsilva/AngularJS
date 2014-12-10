(function() {
	
	var reviews = angular.module('reviews', []);
	reviews.controller("ReviewController", function() {
		this.review = {};
		
		this.addReview = function(products)
		{
			// add a date to the review array
			this.review.createdOn = Date.now();
			
			// review is the same name as the review in the HTML revControll.review.
			// products is the ARRAY of products created in app.js --> this.products
			products.reviews.push(this.review);
			this.review = {};
		}
	});
	

})();