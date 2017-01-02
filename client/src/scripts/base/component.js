(function () {
'use strict';
	console.log('hä');
	nhl.component = {
		get: function (name) {
			var component = $('[data-component="' + name + '"]');
			component.exists = component.length > 0;
			return component;
		}
	}
}());