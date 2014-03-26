Cricket.IndexRoute = Ember.Route.extend({

	redirect: function(){
		console.log("Transitioned to the login route....");
		this.transitionTo('login');
	}
});