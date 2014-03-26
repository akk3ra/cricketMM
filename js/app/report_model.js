Cricket.Report = Ember.Model.extend({

	id: DS.attr('string'),
	matchName: DS.attr('string'),
	teamA: DS.hasMany('player', {async: true}),
	teamB: DS.hasMany('player', {async: true}),
	firstBatting: DS.attr('string'),
	matchTime: DS.attr('date'),
	venue: DS.attr('string'),
	stats: DS.attr('stats'),
	computeReadableTime: function(){
			// Code to make the time into readable format
			return Moment(this.get('matchTime')).fromTime();

	}.property('matchTime').cacheable();
	
});


Cricket.Stats = Ember.Object.extend({
	id: DS.attr('string'),
	teamA: DS.hasMany('mainStat'),
	teamB: DS.hasMany('mainStat'),
	matchResult: DS.attr('string'),
	matchComplete: DS.attr('string')
});

Cricket.MainStat = Ember.Object.extend({
	batsmanId: DS.attr('string'),
	batsmanName: DS.attr('string'),
	ballsPlayed: DS.attr('string'),
	batStat: DS.hasMany('batStat')
});

Cricket,BatStat = Ember.Object.extend({

	
});
Cricket.Report.FIXTURES = [
]