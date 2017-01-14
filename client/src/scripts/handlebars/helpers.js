(function () {
	'use strict';

	var init = function () {
		Handlebars.registerHelper('helperLowerCase', function (string) {
		    if(string) return string.toLowerCase();
		});

		Handlebars.registerHelper('toFixed', function (numb, fix) {
		    if(numb) return numb.toFixed(fix);
		});

		Handlebars.registerHelper('fixTeam', function (team) {
			var retVal = team.toLowerCase()
		    if(retVal && retVal.indexOf(',')) {
		     	var arr = retVal.split(',');
		     	return arr[arr.length - 1];
		    }
		    return retVal;
		});

		Handlebars.registerHelper('hourMinute', function (dateString) {
			if(moment) return moment(dateString).format('HH:mm') 
		});

		Handlebars.registerHelper('add', function (a, b, c) {
			return a + b + c;
		});

		Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		  if(v1 === v2) {
		    return options.fn(this);
		  }
		  return options.inverse(this);
		});
	}
	init();

}());
