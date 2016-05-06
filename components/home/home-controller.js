(function () {
	'use strict';

	angular
		.module('app')
		.controller('homeController', homeController);

	homeController.$inject = ['$stateParams'];
	function homeController ($stateParams) {
		var self = this;
		console.log($stateParams);
	}
})();