(function () {
'use strict';
	nhl.component = {
		get: function (name) {
			var component = $('[data-component="' + name + '"]');
			component.exists = component.length > 0;
			return component;
		}
	}
}());