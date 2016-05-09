(function() {
	'use strict';

	angular
		.module('app', ['ui.router', 'ngCookies'])
		.config(config)
		.run(run)
		
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config ($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /404
		$urlRouterProvider.otherwise("/404");

		// no route goes to index
    	$urlRouterProvider.when('', '/');

		// Now set up the states
		$stateProvider.state('home', {
		    url: '/',
		    templateUrl: 'components/home/home-form.html',
		    controller: "homeController",
		    controllerAs: 'self'
		}).state('404', {
		    url: '/404',
		    templateUrl: 'shared/views/404.html'
		}).state('signin', {
		    // we'll add another state soon
		    url: '/signin',
		    templateUrl: 'components/signin/signin-form.html',
		    controller: 'signinController',
		    controllerAs: 'signin'
		});
	}

	run.$inject = ['$cookies', 'signin', '$state'];
	function run ($cookies, signin, $state) {
		var signined = signin.isSignined();console.log($state);
		if (signined === false) {
			$state.go('signin');
		}
		console.log(signined);
	}
})();