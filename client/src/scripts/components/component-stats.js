$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('stats');

	if(components.exists) {
		$.each(components, function (index, component) {
			var pageLimit = 50;
			var getDataAndRender = function (query) {
				nhl.ajax.get('/api/getStats?' + $.param(query), 'stats').then(function (data) {
					data = data.items;
					data.start = query.startPage * pageLimit - pageLimit;
					$(component).empty();
					$(component).nhlTemplate({
						templateName: 'stats',
						data: data,
						callback: function () {
							var selector = $('#sortby');
							selector.selectpicker();

							$('[data-change="prev"]').on('click', function () {
								if(query.startPage > 1) {
									getDataAndRender({
										startPage: query.startPage - 1,
										limit: pageLimit,
										sortOrder: query.sortOrder
									});
								}
							});

							$('[data-change="next"]').on('click', function () {
								var limit = 50;
								if(data.total / limit > query.startPage) {
									getDataAndRender({
										startPage: query.startPage + 1,
										limit: pageLimit,
										sortOrder: query.sortOrder
									});
								}
							});

							selector.val(query.sortOrder).change();
							selector.on('change', function () {
								getDataAndRender({
									startPage: 1,
									limit: pageLimit,
									sortOrder: $(this).val()
								});
							});
						}
					});
				});
			}

			getDataAndRender({
				startPage: 1,
				limit: pageLimit,
				sortOrder: 'points'
			});

		});
	}
});