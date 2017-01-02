import request from 'request';
import { getSeason } from './utils/timehelper'

export default () => {
	const season = getSeason();
	const url = `https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?expand=standings.record,standings.team,standings.division,standings.conference,team.schedule.next,team.schedule.previous&season=20152016`;

	const buildPlayOff = (json) => {
		json = json.records;
		var retVal = {
			wildCard: {},
			divisionLeaders: {
				Eastern: {
					teams: []
				},
				Western: {
					teams: []
				},
			}
		};

		const settings = {
			eastern: {
				conference: 'Eastern',
				division1: 'Atlantic',
				division2: 'Metropolitan'
			},
			western: {
				conference: 'Western',
				division1: 'Central',
				division2: 'Pacific'
			}
		}

		for (var i = 0; i < json.length; i++) {
			if(json[i].standingsType === 'wildCard') {
				retVal.wildCard[json[i].conference.name] = json[i].teamRecords.slice(0,2);
			} else {
				retVal.divisionLeaders[json[i].conference.name][json[i].division.name] = json[i].teamRecords;
				retVal.divisionLeaders[json[i].conference.name].teams.push.apply(retVal.divisionLeaders[json[i].conference.name].teams, json[i].teamRecords);
			}
		}


		return {
			western: getMatchUps(retVal, settings.western),
			eastern: getMatchUps(retVal, settings.eastern)
		}
	}

	const getMatchUps = (retVal, settings) => {
		const conferenceTop = sortConferenceLeaders(retVal.divisionLeaders[settings.conference].teams)
		const matchUp = (team1, team2) => ({ team1, team2 });

		return [
			matchUp(conferenceTop[0], retVal.wildCard[settings.conference][1]),
			matchUp(retVal.divisionLeaders[settings.conference][settings.division2][1], retVal.divisionLeaders[settings.conference][settings.division2][2]),
			matchUp(conferenceTop[1], retVal.wildCard[settings.conference][0]),
			matchUp(retVal.divisionLeaders[settings.conference][settings.division1][1], retVal.divisionLeaders[settings.conference][settings.division1][2])
			
		];
	}

	const sortConferenceLeaders = (conference) => {
		const retVal = conference.filter(team => parseInt(team.divisionRank) === 1);

		return retVal.sort((a, b) => {
			
			const x = parseInt(a.conferenceRank),
				y = parseInt(b.conferenceRank)

			if (x > y) {
		  	  return 1;
		 	}
			if (x < y) {
			    return -1;
			}
		  	return 0;
		});

	};

	const promise = new Promise((resolve, reject) => {
		request(url, (err, resp, body) => {
			resolve(buildPlayOff(JSON.parse(body)))
		});
	});

	return promise;
}
