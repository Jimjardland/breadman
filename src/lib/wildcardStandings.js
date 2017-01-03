import request from 'request';
import { getSeason } from './utils/timehelper'

export default () => {
	const season = getSeason();
	const url = `https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?expand=standings.record,standings.team,standings.division,standings.conference,team.schedule.next,team.schedule.previous&season=${season}`;

	const promise = new Promise ((resolve, reject) => {
		try {
			request(url, (err, resp, body) => {
				resolve(JSON.parse(body));
			});
		} catch (err) {
			reject();
			console.log(err);
		}
	});

	return promise;
}