$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('goalies');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/startingGoalies', 'goalies').done(function (data) {
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