import request from 'request';
import { getSeason } from './utils/timehelper'

export default () => {
	const season = getSeason();
	const url = `https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record,standings.team,standings.division,standings.conference,team.schedule.next,team.schedule.previous&season=${season}`;

	const sortStandings = (a, b) => {
		const aLr = parseInt(a.leagueRank),
			bLr = parseInt(b.leagueRank);

	  if (aLr > bLr) {
	    return 1;
	  }
	  if (aLr < bLr) {
	    return -1;
	  }
	  return 0;
	}

	const formatStandings = ({records}) => {
		const retVal = [];
		for (var i = 0; i < records.length; i++) {
			var teamRecords = records[i].teamRecords;
			for (var j = 0; j < teamRecords.length; j++) {
				teamRecords[j].pointPercentage = (teamRecords[j].points / (teamRecords[j].gamesPlayed * 2)).toFixed(3);
				retVal.push(teamRecords[j]);
			}
		}

		return retVal.sort(sortStandings);
	};

	const promise = new Promise ((resolve, reject) => {
		try {
			request(url, (err, resp, body) => {
				resolve(formatStandings(JSON.parse(body)));
			});
		} catch (err) {
			reject();
			console.log(err);
		}
	});

	return promise;
}