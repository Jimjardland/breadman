$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('highlights');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/highlights', 'highlights').done(function (data) {
				$(component).nhlTemplate({
					templateName: 'highlights',
					data: data,
					callback: function () {
						var spoilBtn = $(component).find('[data-spoil]');
						$(component).find('.show-all').on('click', function () { 
							$(this).parents('[data-container]').find('[data-spoil]').click();
						});

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