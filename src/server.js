import express from 'express';
import timerjobs from './lib/timerjobs';
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
app.get('/about', (req, res) => page(res, 'about'));
app.get('/standings', (req, res) => page(res, 'standings'));

const getFilePath = (file) => `./tmp/${file}.json`;
const get = (name, res) => {
 	const readable = fs.createReadStream(getFilePath(name));
    readable.pipe(res);
}

router.get('/injuries', (req, res) => get('injuries', res));
router.get('/goaliesInForm', (req, res) => get('goaliesInForm', res));
router.get('/getStats', (req, res) => get('playerStats', res));
router.get('/highlights', (req, res) => get('highlights', res));
router.get('/ifPlayOffsWouldStartToday', (req, res) => get('playOff', res));
router.get('/startingGoalies', (req, res) => get('startingGoalies', res));
router.get('/wildcardStandings', (req, res) => get('wildcardStandings', res));
router.get('/divisionStandings', (req, res) => get('divisionStandings', res));



router.get('/drafteePoints', (req, res) => {
	//Plocka upp från hockeyDb draft år. Enda vi kan gå på är namn. Ta reda på problem det kan skapa
});



app.listen(3000, () => {
	console.log('listening on 3000')
})