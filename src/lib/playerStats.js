import request from 'request';
import { getSeason } from './utils/timehelper'


export default (sort) => {
	const season = getSeason();
	const url = `http://www.nhl.com/stats/rest/grouped/skaters/basic/season/skatersummary?cayenneExp=seasonId=${season}%20and%20gameTypeId=2&factCayenneExp=gamesPlayed%3E=1&sort=[{%22property%22:%22points%22,%22direction%22:%22DESC%22},{%22property%22:%22goals%22,%22direction%22:%22DESC%22},{%22property%22:%22assists%22,%22direction%22:%22DESC%22}]`;
	const setUniqueStats = (json) => {
		for(var i=0; i < json.data.length; i++) {
			var player = json.data[i];

			//full strength points
			player.fsPoints = player.points - player.ppPoints - player.shPoints;
			//points per 60 minutes of icetime
			if(player.gamesPlayed > 1) {
				player.pointsPerSixty = parseFloat(((player.pointsPerGame / (player.timeOnIcePerGame / 60)) * 60));
				//Penalties per 60 minutes of ice time
				player.PenaltyMinutesPerGame = player.penaltyMinutes / player.gamesPlayed;
				player.penaltiesPerSixty = parseFloat(((player.PenaltyMinutesPerGame / (player.timeOnIcePerGame / 60)) * 60));
			}
		}

		return json;
	}

	const promise = new Promise ((resolve, reject) => {
		try {
			request(url, (err, resp, body) => {
				const json = setUniqueStats(JSON.parse(body))
				resolve(json);
			});
		} catch (err) {
			reject();
			console.log(err);
		}
	});

	return promise;
}