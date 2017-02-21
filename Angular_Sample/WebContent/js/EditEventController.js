'Use Strict'

eventsApp.controller("EditEventController" , 
		function($scope){
			$scope.saveEvent = function(event , newEventForm){
				if(newEventForm.$valid){
					window.alert("event " + event.name + " " + "is saved !!");
				}
			}
			
			$scope.cancelEdit = function(){
				window.location = "http://localhost:8080/Angular_Sample/EventDetails.html";
			}
	
});