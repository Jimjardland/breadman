(function () {
	'use strict';

	var init = function () {
		Handlebars.registerHelper('helperLowerCase', function (string) {
		    return string.toLowerCase();
		});

	}
	init();

}());
