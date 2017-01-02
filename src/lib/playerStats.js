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
			player.pointsPerSixty = ((player.pointsPerGame / (player.timeOnIcePerGame / 60)) * 60).toFixed(1);
			//Penalties per 60 minutes of ice time
			player.PenaltyMinutesPerGame = player.penaltyMinutes / player.gamesPlayed;
			player.penaltiesPerSixty = ((player.PenaltyMinutesPerGame / (player.timeOnIcePerGame / 60)) * 60).toFixed(1);
		}

		return json;




	}

	const sortByPointsPerSixty = (a, b) => {
	  if (a.PointsPerSixty < b.PointsPerSixty) {
	    return 1;
	  }
	  if (a.PointsPerSixty > b.PointsPerSixty) {
	    return -1;
	  }
	  return 0;
	}

	const sortByFsPoints = (a, b) => {
	  if (a.fsPoints < b.fsPoints) {
	    return 1;
	  }
	  if (a.fsPoints > b.fsPoints) {
	    return -1;
	  }
	  return 0;
	}

	const sorting = (json, sort) => {
		//var retVal = json;

		// if(sort) {
		// 	switch(sort) {
		// 		case 'fspoints':
		// 			console.log('sorting by fsPoints');
		// 			json = json.sort(sortByFsPoints);
		// 			break;
		// 		case 'pointspersixty':
		// 			console.log('sorting by pointsPerSixty');
		// 			json = json.sort(sortByFsPoints);
		// 			break;
		// 		default:
		// 			console.log('default');
		// 			json = json;
		// 			break;
		// 	}
		// }

		return json;
	}

	const promise = new Promise ((resolve, reject) => {
		request(url, (err, resp, body) => {
			const json = setUniqueStats(JSON.parse(body))
			resolve(sorting(json, sort));
		});
	});

	return promise;
}