import fs from 'fs';
import goaliesInForm from './goaliesInForm';
import injuries from './injuries';
import playerStats from './playerStats';
import highlights from './highlights';
import playoff from './playoff';
import startingGoalies from './startingGoalies';
import wildCardStandings from './wildCardStandings';
import divisonStandings from './divisionStandings';
import { cacheDates } from './utils/timehelper';

var CronJob = require('cron').CronJob;

var job = new CronJob('0 */5 * * * *', function() {

  console.log('CronJob')
  const dates = cacheDates(),
        getJson = (items) => ({ latestUpdate: dates.latestUpdate, nextUpdate: dates.nextUpdate, items }),
        getFilePath = (file) => `./tmp/${file}.json`,
        writeFile = (file, items) => fs.writeFile(getFilePath(file), JSON.stringify(getJson(items)), 'utf8', () => null);

  goaliesInForm().then(items => writeFile('goaliesInForm', items));
  wildCardStandings().then(items => writeFile('wildCardStandings', items));
  injuries().then(items => writeFile('injuries', items));
  playerStats().then(items => writeFile('playerStats', items));
  highlights().then(items => writeFile('highlights', items));
  playoff().then(items => writeFile('playoff', items));
  startingGoalies().then(items => writeFile('startingGoalies', items));
  divisonStandings().then(items => writeFile('divisionStandings', items));


  }, function () {
    console.log('job done');
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Los_Angeles' /* Time zone of this job. */
);


job.start();