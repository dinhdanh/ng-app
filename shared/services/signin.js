(function () {
	'use strict';

	angular
		.module('app')
		.service('signin', signin)

	signin.$inject = ['$cookies'];
	function signin ($cookies) {
		var self = this;

		self.isSignined = function () {
			var user = $cookies.getObject('user');
			if (user !== undefined) {
				return true;
			} else {
				return false;
			}
		}
	}
})();