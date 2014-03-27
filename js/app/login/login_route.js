Cricket.LoginRoute = Ember.Route.extend({

	model: function(){
		console.log("Inside the Login Route..");
		return this.store.find('cricketLogin');
	}
});