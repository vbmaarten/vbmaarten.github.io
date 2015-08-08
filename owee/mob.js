var phonecatApp = angular.module('aegeeowee', []);

phonecatApp.controller('MainCtrl', function ($scope) {
	$scope.splash = {
		opacity: 0;
		zindex: 100;
	}

	$scope.clicksplash = function(){
		alert("HIO");	
	}
}