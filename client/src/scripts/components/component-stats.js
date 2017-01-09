$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('stats');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/getStats?sortOrder=fsPoints&startPage=1&limit=5', 'stats').done(function (data) {
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