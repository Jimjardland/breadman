import request from 'request';
import { getSeason } from './utils/timeHelper'


export default (sort) => {
	const season = getSeason();
	console.log(season)
	const url = `https://api.nhle.com/stats/rest/en/skater/summary?isAggregate=false&reportType=basic&isGame=false&reportName=skatersummary&sort=[{%22property%22:%22points%22,%22direction%22:%22DESC%22},{%22property%22:%22goals%22,%22direction%22:%22DESC%22},{%22property%22:%22gamesPlayed%22,%22direction%22:%22DESC%22}]&cayenneExp=gameTypeId=2%20and%20seasonId%3E=${season}%20and%20seasonId%3C=${season}`;
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
				console.log(body)
				const json = setUniqueStats(JSON.parse(body))
				resolve(json);
			});
		} catch (err) {
			console.log(err);
		}
	});

	return promise;
}