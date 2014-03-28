Ember.Handlebars.registerBoundHelper('ifEqual',function(conditional, options){
	if (options.hash.value === conditional) {
		console.log("Entered ifEqual helper function....");
	    return options.fn(this)
	  } else {
	    return options.inverse(this);
	  }
});
Ember.Handlebars.registerBoundHelper('ifStarts',function(conditional, options){

});