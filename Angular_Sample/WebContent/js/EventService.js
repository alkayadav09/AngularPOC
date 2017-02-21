'use strict'
/*
	this service is creating the new events for the Angular Session and keeping the upVote and 
	downvote counts for the session 
*/
eventsApp.factory("eventService" , 
		function(){
			return {
				getEvents : {
					name: 'Angular Boot Camp',
					date: "1/24.2017",
					time: "10:00 AM",
					location: {
						address: 'NYU campus',
						city: 'New York City',
						state: 'New York'
					},
					sessions: [
					           {name : 'Angular Basic Session',
					        	time : '10:00 AM',
					        	duration : '2 hrs',
					        	topic : 'Discussion on Modules, Controller and Directive',
					        	upVoteCount : 0 ,
					        	downVoteBtn : true},
					           {name : 'Angular Advance Session',
					        	time : '1:00 PM',
					        	duration: '2 hrs',
					        	topic : 'Discussion on Services and Filters',
					        	upVoteCount : 0 ,
					        	downVoteBtn : true},
					           {name : 'Angular Testing Session ',
					           	time : '3:00 PM',
					           	duration : '2 hrs',
					           	topic : 'Discussion on Angular testing',
					           	upVoteCount : 0 ,
					           	downVoteBtn : true}]
				},
				getUpVoteSession : function(session){
										session.upVoteCount ++ ;
										if(session.upVoteCount > 0){
											session.downVoteBtn = false;
										}
					
									},
				getDownVoteSession : function(session){
										session.upVoteCount -- ;
										if(session.upVoteCount == 0){
											session.downVoteBtn = true;
										}
									}
			};
})