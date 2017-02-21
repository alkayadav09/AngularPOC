'use strict'

 var eventsApp = angular.module('EventApp',['ngRoute'])
 			.config( function($routeProvider , $locationProvider){
 				$routeProvider
	 				.when('/events' , {
	 					templateUrl: './templates/EventDetails.html',
	 					controller : 'EventController'
	 				})
	 				.when('/newEvent',{
	 					templateUrl: './templates/AddEvents.html',
	 					controller : 'EditEventController'
	 				})
	 				.otherwise({redirectTo : '/events'});
 				$locationProvider.html5Mode(true);
 			});