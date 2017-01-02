$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('injuries');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.get('/api/injuries').done(function (data) {
				data = JSON.parse(data);
				console.log(data);
				$(component).nhlTemplate({
					templateName: 'injuries',
					data: data,
					callback: function () {
					}
				});
			});
		});
	}
});