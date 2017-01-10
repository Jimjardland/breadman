$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('playoffs');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.cache.clear()
			nhl.ajax.getAndCacheOrGetFromCache('/api/ifplayoffswouldstarttoday', 'playoffs').done(function (data) {
				console.log(data);
				var setClasses = function () {
					$(component).find('.team-name').each(function (i) {
						$(this).addClass($(this).text().toLowerCase() + ' playoffs-logo');

						if(i > 10) {
							$(this).addClass('playoffs-right');
						} else {
							$(this).addClass('playoffs-left');
						}
						$(this).text('');
					});
				};

				var formatData = function (data) {
					var retVal = [];

					pushConference(data.eastern.reverse(), retVal);
					retVal.reverse();
					pushConference(data.western, retVal);
				
					return retVal;
				};

				var pushConference = function (conference, container) {
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