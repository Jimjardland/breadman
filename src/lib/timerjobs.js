import fs from 'fs';
import goaliesInForm from './goaliesInForm';
import injuries from './injuries';
import playerStats from './playerStats';
import highlights from './highlights';
import playoff from './playoff';
import startingGoalies from './startingGoalies';

var CronJob = require('cron').CronJob;

var job = new CronJob('0 */1 * * * *', function() {

  console.log('CronJob')
  const latestUpdate = new Date(),
        nextUpdate = new Date().setMinutes(latestUpdate.getMinutes() + 10),
        getJson = (items) => ({ latestUpdate, nextUpdate, items }),
        getFilePath = (file) => `./tmp/${file}.json`;

  goaliesInForm().then(items => {
      fs.writeFile(getFilePath('goaliesInForm'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });

  injuries().then(items => {
    fs.writeFile(getFilePath('injuries'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });

  playerStats().then(items => {
       fs.writeFile(getFilePath('playerStats'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });

  highlights().then(items => {
    fs.writeFile(getFilePath('highlights'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });

  playoff().then(items => {
    fs.writeFile(getFilePath('playoff'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });

  startingGoalies().then(items => {
    fs.writeFile(getFilePath('startingGoalies'), JSON.stringify(getJson(items)), 'utf8', () => null);
  });


  }, function () {
    console.log('job done');
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Los_Angeles' /* Time zone of this job. */
);


job.start();