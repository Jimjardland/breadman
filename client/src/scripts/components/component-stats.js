$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('stats');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.get('/api/getStats').done(function (data) {
				data = JSON.parse(data);
				console.log(data);
				$(component).nhlTemplate({
					templateName: 'stats',
					data: data,
					callback: function () {
					}
				});
			});
		});
	}
});