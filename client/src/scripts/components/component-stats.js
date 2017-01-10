$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('stats');

	if(components.exists) {
		$.each(components, function (index, component) {
			var getDataAndRender = function (query) {
				nhl.ajax.get('/api/getStats?' + $.param(query), 'stats').then(function (data) {
					console.log(data);
					data = data.items;
					$(component).empty();
					$(component).nhlTemplate({
						templateName: 'stats',
						data: data,
						callback: function () {
							console.log('yo');
							//$('.pagination').attr('data-current-page', query.startPage);

							$('[data-change="prev"]').on('click', function () {
								if(query.startPage > 1) {
									getDataAndRender({
										startPage: query.startPage - 1,
										limit: 50,
										sortOrder: 'points'
									});
								}
							});

							$('[data-change="next"]').on('click', function () {
								var limit = 50;
								if(data.total / limit > query.startPage) {
									getDataAndRender({
										startPage: query.startPage + 1,
										limit: 50,
										sortOrder: 'points'
									});
								}
							});
						}
					});
				});
			}

			getDataAndRender({
				startPage: 1,
				limit: 50,
				sortOrder: 'points'
			});

		});
	}
});