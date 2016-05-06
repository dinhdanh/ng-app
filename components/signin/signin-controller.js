(function () {
	'use strict';

	angular
		.module('app')
		.controller('signinController', signinController);

	signinController.$inject = ['$location', '$log'];
	function signinController ($location, $log) {
		var self = this;
		self.test = test;

		function test() {
			// alert('asd');
			console.log($location);
			var person = {firstName:"John", lastName:"Doe", age:46};
			$log.debug(person)
		}
	}
})();