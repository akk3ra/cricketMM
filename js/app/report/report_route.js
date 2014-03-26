Cricket.Report = DS.Model.extend({
	model: function(){
		return this.store.find('report');
	}
});