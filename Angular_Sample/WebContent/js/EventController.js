'use strict'

eventsApp.controller('EventController' ,
	function($scope, eventService){
		$scope.event = eventService.getEvents;

		$scope.upVoteSession = eventService.getUpVoteSession;
			
		
		$scope.downVoteSession = eventService.getDownVoteSession;
		
		
});