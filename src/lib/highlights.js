import request from 'request';
import { todayAndDaysBack, formatDate } from './utils/timeHelper'

export default () => {
	const date = todayAndDaysBack(3, 'YYYY-MM-DD');
	const url = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${date.daysBack}&endDate=${date.today}&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.ticket,schedule.game.content.media.epg,schedule.radioBroadcasts,schedule.decisions,schedule.scoringplays,schedule.game.content.highlights.scoreboard,team.leaders,schedule.game.seriesSummary,seriesSummary.series&leaderCategories=points,goals,assists&leaderGameTypes=R&site=en_nhlNORDIC&teamId=&gameType=&timecode=`;

	const getHighlightsUrls = (json) => {
		const retVal = [];
		const gameDay = (date) => ({ date, games: [], gameFinished: false });
		const formatUrl = (id) => `https://www.nhl.com/video/embed/c-${id}&autoplay=true`;

		const getUrl = (arr) => {
   			for(var i=0; i < arr.length; i++) {
   				const video = arr[i];
   				let vid;
   				if(video.items.length) {
						switch (video.title) {
							case 'Recap':
								vid = video.items[0].mediaPlaybackId || false;
								break;
							case 'Extended Highlights':
								vid = video.items[0].mediaPlaybackId || false;
								break;
						}
						if(vid) return formatUrl(vid)
					}
   			}
			return null;
		}

		const formatDay = (obj, games) => {
			for (let i = 0; i < games.length; i++) {
				const game = games[i];

				const gameInfo = {
					homeTeam: game.teams.home.team.name,
					awayTeam: game.teams.away.team.name,
					homeGoals: game.teams.home.score,
					awayGoals: game.teams.away.score,
					homeWin: game.teams.home.score > game.teams.away.score,
					arena: game.venue.name,
					date: game.gameDate
				};

				if(gameInfo.homeWin) {
					gameInfo.winner = gameInfo.homeTeam;
				} else {
					gameInfo.winner = gameInfo.awayTeam;
				}

				if(game.linescore.currentPeriodTimeRemaining === 'Final') {
					obj.gameFinished = true;
					gameInfo.gameFinished = true;
					gameInfo.url = getUrl(game.content.media.epg);

					if(game.linescore.currentPeriodOrdinal !== '3rd') gameInfo.endedWith = game.linescore.currentPeriodOrdinal;

				} else {
					gameInfo.gameFinished = false;
				}
				obj.games.unshift(gameInfo);
			}
			return obj
		}

		for(var i=0; i < json.dates.length; i++) {
			const day = json.dates[i];
			const obj = gameDay(formatDate(day.date, 'dddd MMMM Do YYYY'));

			retVal.unshift(formatDay(obj, day.games));

		}
		return retVal
	}

	const promise = new Promise((resolve, reject) => {
		try {
			request(url, (err, resp, body) => {
				resolve(getHighlightsUrls(JSON.parse(body)))
			});
		} catch (err) {
			console.log(err);
		}
	});

	return promise;
}
