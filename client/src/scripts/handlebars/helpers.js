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
	}
	init();

}());
