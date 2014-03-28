
Cricket.Report = DS.Model.extend({
	matchName: DS.attr('string'),
	//teamA: DS.hasMany('player', {async: true}),
	//teamB: DS.hasMany('player', {async: true}),
	firstBatting: DS.attr('string'),
	matchTime: DS.attr('string'),
	venue: DS.attr('string'),
	stat: DS.belongsTo('stat', {embedded: 'always'})
});
Cricket.Stat = DS.Model.extend({
	matchResult: DS.attr('string'),
	matchComplete: DS.attr('string'),
	mainStats: DS.hasMany('mainStat', {async: true, embedded: 'always'}),
	//teamB: DS.hasMany('mainStat', {async: true, embedded: 'always'})
});
// Here MainStat Model represents the batsman for both the teams.
//Do not get confused if you do not have teamA and teamB separately.
Cricket.MainStat = DS.Model.extend({
	batsmanId: DS.attr('string'),
	batsmanName: DS.attr('string'),
	ballsPlayed: DS.attr('number'),
	batStats: DS.hasMany('batStat', {async: true, embedded: 'always'})
});
Cricket.BatStat = DS.Model.extend({
	bowlerId: DS.attr('string'),
	bowlerName: DS.attr('string'),
	strikes: DS.hasMany('strike', {async: true, embedded: 'always'})
	
});
Cricket.Strike = DS.Model.extend({
	//bowlerId: DS.attr('string'),
	//bowlerName: DS.attr('string'),
	deliveryType: DS.attr('string'),
	batsmanResponse: DS.attr('string'),
	runsScored: DS.attr('number'),
	shotStyle: DS.attr('string')
});











