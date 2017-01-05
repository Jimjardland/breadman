$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('standings');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/divisionStandings', 'divisionStandings').done(function (data) {
				console.log(data);
				$(component).nhlTemplate({
					templateName: 'standings-division',
					data: data,
					callback: function () {
					}
				});
			});
		});
	}
});