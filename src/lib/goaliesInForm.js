import request from 'request';
import { todayAndDaysBack } from './utils/timehelper'

export default (sort) => {
	const date = todayAndDaysBack(10, 'YYYY-MM-DD');
	const url = `http://www.nhl.com/stats/rest/individual/goalies/goalie_basic/game/goaliesummary?cayenneExp=gameDate>="${date.daysBack}" and gameDate<="${date.today}" and gameTypeId=2 and playerPositionCode="G"&factCayenneExp=gamesPlayed>=3&sort=[{"property":"savePctg","direction":"DESC"}]`;

	const promise = new Promise((resolve, reject) => {
		request(url, (err, resp, body) => {
			resolve(JSON.parse(body));
		});
	});

	return promise;
}