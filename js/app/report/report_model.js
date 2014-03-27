Cricket.Report = DS.Model.extend({

	id: DS.attr('string'),
	matchName: DS.attr('string'),
	//teamA: DS.hasMany('player', {async: true}),
	//teamB: DS.hasMany('player', {async: true}),
	firstBatting: DS.attr('string'),
	matchTime: DS.attr('date'),
	venue: DS.attr('string'),
	stats: DS.belongsTo('stats', {embedded: true})
	//readableTime: function(){
			// Computed property to make the time into readable format
			//return Moment(this.get('matchTime')).fromNow();

	//}.property('matchTime')
	
});



Cricket.Stats = DS.Model.extend({
	id: DS.attr('string'),
	matchResult: DS.attr('string'),
	matchComplete: DS.attr('string'),
	teamA: DS.hasMany('mainStat', {async: true, embedded: true}),
	teamB: DS.hasMany('mainStat', {async: true, embedded: true})
});

Cricket.MainStat = DS.Model.extend({
	batsmanId: DS.attr('string'),
	batsmanName: DS.attr('string'),
	ballsPlayed: DS.attr('number'),
	batStat: DS.hasMany('batStat', {async: true, embedded: true})
});

Cricket.BatStat = DS.Model.extend({
	bowlerId: DS.attr('string'),
	bowlerName: DS.attr('string'),
	strikes: DS.hasMany('currContext', {async: true, embedded: true})
	
});

Cricket.CurrContext = DS.Model.extend({
	id: DS.attr('number'),
	deliveryType: DS.attr('string'),
	batsmanResponse: DS.attr('string'),
	runsScored: DS.attr('number'),
	shotStyle: DS.attr('string')
});











