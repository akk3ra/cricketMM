Cricket.LoginRoute = Ember.Route.extend({

	model: function(){

		return this.store.find('cricketLogin');
	}
});