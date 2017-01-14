(function () {
'use strict';
	nhl.ajax = {
		getAndCacheOrGetFromCache: function (url, key) {
			var storageData = nhl.cache.get(key);
			var def = $.Deferred();

			if(storageData === null) {
				this.get(url).then(function (data) {
					if(typeof(data) === 'string') data = JSON.parse(data);
					nhl.cache.setWithExpiration(key, data.items, data.nextUpdate);
					def.resolve(data.items);
				});
			} else {
				def.resolve(storageData.value);
			}

			return def.promise();

		},
		get: function (url) {
			return $.ajax({
				url: url,
				type: 'GET',
				headers: { 'Accept': 'application/json; odata=verbose' },
				async: true
			});
		}
	}
}());
(function () {
'use strict';
	nhl.cache = {
		prefix: 'breadman_',
		set: function (key, value) {
			localStorage.setItem(this.prefix + key, JSON.stringify(value));
		},
		get: function (key) {
			var item = JSON.parse(localStorage.getItem(this.prefix + key));
			var dateKey = 'localStorageKeyExpires';

			if(item && item.hasOwnProperty(dateKey) && new Date(item[dateKey]).getTime() < new Date().getTime()) {
				this.remove(key);
			} else {
				return item;
			}

			return null;
		},
		setWithExpiration: function (key, value, date) {
			localStorage.setItem(this.prefix + key, JSON.stringify({ value: value, localStorageKeyExpires: date}));
		},
		remove: function (key) {
			localStorage.removeItem(key);
		},
		clear: function () {
			var arr = [];

			for (var i = 0; i < localStorage.length; i++){
			    if (localStorage.key(i).substring(0, this.prefix.length) == this.prefix) {
			        arr.push(localStorage.key(i));
			    }
			}

			for (var i = 0; i < arr.length; i++) {
			    localStorage.removeItem(arr[i]);
			}
		}
	}
}());
(function () {
'use strict';
	nhl.component = {
		get: function (name) {
			var component = $('[data-component="' + name + '"]');
			component.exists = component.length > 0;
			return component;
		}
	}
}());
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



$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('goalies');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/startingGoalies', 'goalies').done(function (data) {
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
$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('playoffs');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/ifplayoffswouldstarttoday', 'playoffs').done(function (data) {
				var setClasses = function () {
					var teamNames = $(component).find('.team-name');
					var length = teamNames.length;

					teamNames.each(function (i) {
						var playoffClass = i < length / 2 ? 'playoffs-left' : 'playoffs-right';
						$(this).addClass($(this).text().toLowerCase() + ' playoffs-logo logo-large ' + playoffClass);
						$(this).text('');
					});
				};

				var formatData = function (data) {
					var retVal = [];

					unshiftConference(data.eastern.reverse(), retVal);
					retVal.reverse();
					unshiftConference(data.western, retVal);
				
					return retVal;
				};

				var unshiftConference = function (conference, container) {
					for (var i = 0; i < conference.length; i++) {
						var matchup = conference[i];
						container.unshift({
							name: matchup.team1.team.name
						},
						{
							name: matchup.team2.team.name
						});
					}
					return container;
				}
				$(component).bracket( { rectFill:'#0000', bgcolor:'#FFFF', teams:16, topOffset:50, height:'600px', scale:0.60, icons:false, 
					teamNames: formatData(data) });
				setClasses();
			});
		});
	}
});
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
$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('stats');

	if(components.exists) {
		$.each(components, function (index, component) {
			var getDataAndRender = function (query) {
				nhl.ajax.get('/api/getStats?' + $.param(query), 'stats').then(function (data) {
					data = data.items;
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
										limit: 50,
										sortOrder: query.sortOrder
									});
								}
							});

							$('[data-change="next"]').on('click', function () {
								var limit = 50;
								if(data.total / limit > query.startPage) {
									getDataAndRender({
										startPage: query.startPage + 1,
										limit: 50,
										sortOrder: query.sortOrder
									});
								}
							});

							selector.val(query.sortOrder).change();
							selector.on('change', function () {
								getDataAndRender({
									startPage: 1,
									limit: 50,
									sortOrder: $(this).val()
								});
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
(function () {
	'use strict';

	var init = function () {
		Handlebars.registerHelper('helperLowerCase', function (string) {
		    if(string) return string.toLowerCase();
		});

		Handlebars.registerHelper('toFixed', function (numb, fix) {
		    if(numb) return numb.toFixed(fix);
		});

		Handlebars.registerHelper('fixTeam', function (team) {
			var retVal = team.toLowerCase()
		    if(retVal && retVal.indexOf(',')) {
		     	var arr = retVal.split(',');
		     	return arr[arr.length - 1];
		    }
		    return retVal;
		});

		Handlebars.registerHelper('hourMinute', function (dateString) {
			if(moment) return moment(dateString).format('HH:mm') 
		});

		Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		  if(v1 === v2) {
		    return options.fn(this);
		  }
		  return options.inverse(this);
		});
	}
	init();

}());
