/* globals Handlebars */
/*
	Usage $('.someContainer').nhlTemplate({
		templateName: filename relative from the templates-folder extension
	});

	dependencies: handlebars, a template-folder configured in gulp.
*/

(function () {
	'use strict';

	$.fn.nhlTemplate = function (settings) {
		var config = {
			templateName: null,
			data: null,
			operation: 'append',
			callback: function () {}
		};

		if (settings) {
			$.extend(config, settings);
			$.extend(config.data, settings);
		}

		var self = this;
		self.init = function () {
			this.each(function () {
				var self = $(this);
				var postTemplate = nhl.templates[config.templateName];
				var result = postTemplate(config.data);
				if (config.operation === 'append') {
					self.append(result);
				} else {
					self.replaceWith(result);
				}
				config.callback.call(self);
			});
		};
		self.init();
	};
})(jQuery);


