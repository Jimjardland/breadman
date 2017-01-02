$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('highlights');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.get('/api/highlights').done(function (data) {
				data = JSON.parse(data);
				console.log(data);
				$(component).nhlTemplate({
					templateName: 'highlights',
					data: data,
					callback: function () {
						var spoilBtn = $(component).find('[data-spoil]');

					    spoilBtn.on('click', function(e){ 
					    	e.preventDefault();
					    	var label = $(this).find('.show-result');
					    	var spoiler = $(this).find('.spoiler');
					   		label.fadeOut('slow', function(){
					        	spoiler.fadeIn('slow');
							});
				   	 	});
						$(component).on('click', '[data-button="iframe"]', function (e) {
							e.preventDefault();
							var url = $(this).data('url');
							var title = $(this).data('title');

							$('#iframe').attr('src', url);
							$('.modal-title').text(title);
							$('.modal').on('hidden.bs.modal', function (e) {
								$('.modal').hide();
								$('.modal iframe').attr('src', '');
							});
						});
					}
				});
			});
		});
	}
});