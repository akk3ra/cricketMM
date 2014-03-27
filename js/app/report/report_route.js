Cricket.ReportRoute = Ember.Route.extend({
	model: function(){
		console.log("Entered the Report route......");
		return this.store.find('report');
	}
});