$(document).ready(function () {
	'use strict';
	var components = nhl.component.get('playoffs');

	if(components.exists) {
		$.each(components, function (index, component) {
			nhl.ajax.getAndCacheOrGetFromCache('/api/playoffs', 'playoffs').done(function (data) {
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