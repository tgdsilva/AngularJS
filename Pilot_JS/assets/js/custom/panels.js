(function() {
	
	
	// module only to deal with the panels
	// this will be imported to store module as a dependency
	// this can be used in any other project
	var app = angular.module('panelControl', []);
	
	// control the sections
	// this is like the constructor
	app.controller('PanelController', function() {
		this.tab = 1;
		
		// function to select the tab
		this.selectTab = function(setTab)
		{
			this.tab = setTab;
		};
		
		// function to check which tab is selected
		this.isSelected = function(checkTab)
		{
			return this.tab === checkTab;
		};
		
	});
	
})();