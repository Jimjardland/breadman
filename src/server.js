import express from 'express';
import timerjobs from './lib/timerjobs';
import sortStats from './lib/sortStats';
import fs from 'fs';
import moment from 'moment';
import path from 'path';

const router = express.Router();
const app = express();

app.use('/api', router);
app.use('/img', express.static('img'));
app.use('/layouts', express.static('client'));

const page = (res, page) => res.sendFile(path.resolve(`client/src/gui/${page}.html`));

app.get('/', (req, res) => page(res, 'index'));
app.get('/injuries', (req, res) => page(res, 'injuries'));
app.get('/stats', (req, res) => page(res, 'stats'));
app.get('/playoffs', (req, res) => page(res, 'playoffs'));
app.get('/goalies', (req, res) => page(res, 'goalies'));
app.get('/standings', (req, res) => page(res, 'standings'));

const getFilePath = (file) => `./tmp/${file}.json`;
const get = (name, res) => fs.createReadStream(getFilePath(name)).pipe(res);
const statsSorting = (json, res, req) => { 
	fs.readFile(getFilePath(json), 'utf8', (err, data) => {
	  const stats = res.json(sortStats(JSON.parse(data), { sort: req.query.sortOrder, start: req.query.startPage, limit: req.query.limit }));
	});
}

router.get('/injuries', (req, res) => get('injuries', res));
router.get('/goaliesInForm', (req, res) => get('goaliesInForm', res));
router.get('/getStats', (req, res) => statsSorting('playerStats', res, req));
router.get('/highlights', (req, res) => get('highlights', res));
router.get('/ifPlayOffsWouldStartToday', (req, res) => get('playOff', res));
router.get('/startingGoalies', (req, res) => get('startingGoalies', res));
router.get('/wildcardStandings', (req, res) => get('wildcardStandings', res));
router.get('/divisionStandings', (req, res) => get('divisionStandings', res));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
})