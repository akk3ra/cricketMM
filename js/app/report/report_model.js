Cricket.Report = DS.Model.extend({

	id: DS.attr('string'),
	matchName: DS.attr('string'),
	//teamA: DS.hasMany('player', {async: true}),
	//teamB: DS.hasMany('player', {async: true}),
	firstBatting: DS.attr('string'),
	matchTime: DS.attr('date'),
	venue: DS.attr('string'),
	stats: DS.attr('stats'),
	//readableTime: function(){
			// Code to make the time into readable format
	//		return Moment(this.get('matchTime')).fromNow();

	//}.property('matchTime')
	
});


//Cricket.Stats = Ember.Object.extend({
	Cricket.Stats = DS.Model.extend({
	id: DS.attr('string'),
	matchResult: DS.attr('string'),
	matchComplete: DS.attr('string'),
	teamA: DS.hasMany('mainStat', {async: true}),
	teamB: DS.hasMany('mainStat', {async: true})
});

//Cricket.MainStat = Ember.Object.extend({
	Cricket.MainStat = DS.Model.extend({
	batsmanId: DS.attr('string'),
	batsmanName: DS.attr('string'),
	ballsPlayed: DS.attr('string'),
	batStat: DS.hasMany('batStat', {async: true})
});

//Cricket.BatStat = Ember.Object.extend({
	Cricket.BatStat = DS.Model.extend({
	bowlerId: DS.attr('string'),
	bowlerName: DS.attr('string'),
	strikes: DS.hasMany('currContext', {async: true})
	
});

//Cricket.CurrContext = Ember.Object.extend({
	Cricket.CurrContext = DS.Model.extend({
	id: DS.attr('int'),
	deliveryType: DS.attr('string'),
	batsmanResponse: DS.attr('string'),
	runsScored: DS.attr('number'),
	shotStyle: DS.attr('string')
});











