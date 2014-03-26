Cricket.Report = DS.Model.extend({

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
			return Moment(this.get('matchTime')).fromNow();

	}.property('matchTime').cacheable()
	
});


Cricket.Stats = Ember.Object.extend({
	id: DS.attr('string'),
	teamA: DS.hasMany('mainStat',{async: true}),
	teamB: DS.hasMany('mainStat',{async: true}),
	matchResult: DS.attr('string'),
	matchComplete: DS.attr('string')
});

Cricket.MainStat = Ember.Object.extend({
	batsmanId: DS.attr('string'),
	batsmanName: DS.attr('string'),
	ballsPlayed: DS.attr('string'),
	batStat: DS.hasMany('batStat',{async: true})
});

Cricket.BatStat = Ember.Object.extend({

	
});
Cricket.Report.FIXTURES = [
]