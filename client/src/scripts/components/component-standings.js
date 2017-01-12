$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('standings');

	if(components.exists) {
		$.each(components, function (index, component) {

			var render = function (template, endpoint) {
				nhl.ajax.getAndCacheOrGetFromCache('/api/' + endpoint, endpoint).done(function (data) {
					$(component).empty();
					$(component).nhlTemplate({
						templateName: template,
						data: data,
						callback: function () {
							var selector = $(component).find('#type');
							selector.selectpicker();
							selector.val(endpoint).change();


							selector.on('change', function () {
								$(this).val() === 'wildcardstandings' ? render('standings-wildcard', 'wildcardstandings') : render('standings-division', 'divisionstandings'); 
							});
						}
					});
				});
			}
			render('standings-wildcard', 'wildcardstandings');
		});
	}
});