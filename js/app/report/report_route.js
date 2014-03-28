Cricket.ReportRoute = Ember.Route.extend({
	model: function(){
		console.log("Entered the Report route......");

		//var reportTable[] = this.store.find('report');


		return this.store.find('report');
	}
});