var Cricket = Ember.Application.create({
	LOG_TRANSITIONS: true
});


Cricket.Router = Ember.Router.extend({

	location: 'hash'
});

Cricket.Router.map(function(){

	this.route('index', {path: '/'});
	this.route('login', {path: '/login'});
	this.route('home', {path: '/home'});
	//this.route('players', {path: '/players'});
});

Cricket.Store = DS.Store.extend({
	adapter: DS.FixtureAdapter
});
