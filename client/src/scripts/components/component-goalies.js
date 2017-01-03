$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('goalies');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.get('/api/startingGoalies').done(function (data) {
				data = JSON.parse(data);
				console.log(data);
				$(component).nhlTemplate({
					templateName: 'goalies',
					data: data,
					callback: function () {
					}
				});
			});
		});
	}
});