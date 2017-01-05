$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('injuries');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/injuries', 'injuries').done(function (data) {
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