var Cricket = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true
});


Cricket.Router = Ember.Router.extend({

	location: 'hash'
});

Cricket.Router.map(function(){

	this.route('index', {path: '/'});
	this.route('login', {path: '/login'});
	this.route('home', {path: '/home'});
	this.route('players', {path: '/players'});
	this.route('report', {path: '/reports'});
	this.route('matches', {path: '/matches'});
	this.route('playerCategory', {path: '/playerCategory'});
	this.route('playerReport', {path: '/playerReports'});
});

//This will be used until we get a REST service
Cricket.Store = DS.Store.extend({
	adapter: DS.RESTAdapter
});

DS.RESTAdapter.reopen({
	host: 'http://localhost:8088',
	namespace: 'json' // This will generate http://localhost:8088/json
});
