(function () {
	'use strict';

	var init = function () {
		Handlebars.registerHelper('helperLowerCase', function (string) {
		    return string.toLowerCase();
		});

		Handlebars.registerHelper('toFixed', function (numb, fix) {
		    return numb.toFixed(fix);
		});
	}
	init();

}());
