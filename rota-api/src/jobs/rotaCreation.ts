import cron from 'node-cron';
import fs from 'fs';
import { createRota } from '../services/rota';

/*
    * * * * * *
    | | | | | |
    | | | | | day of week
    | | | | month
    | | | day of month
    | | hour
    | minute
    second ( optional )
*/

function runCron() {
	cron.schedule('*/2 * * * * *', () => {
		setUpdatable();
	});
}

const setUpdatable = () => {
	const isUpdatabale = JSON.parse(
		fs.readFileSync('src/jobs/rotaInfo.json', 'utf8')
	);
	if (isUpdatabale.isUpdateWeek) {
		console.log('all good');
		isUpdatabale.isUpdateWeek = false;
		fs.writeFileSync(
			'src/jobs/rotaInfo.json',
			JSON.stringify(isUpdatabale)
		);
		createRota();
	} else {
		console.log('not all good');
		isUpdatabale.isUpdateWeek = true;
		fs.writeFileSync(
			'src/jobs/rotaInfo.json',
			JSON.stringify(isUpdatabale)
		);
	}
};
runCron();
/* 
    every day - 2 engineers are picked from the pool of engineers
    the 2 engineers chosen cannot have done a shift the day before

    need an enum of days 1-10 (monday - friday);
    
    need a json file that is updated every day
    this json file stores the rota data over a 2 week period
    this will be done using a cron
    the cron will also clear itself after it is redundant
    alternatively the cron can schedule a function that triggers the last rota being moved into a store of previous rotas.
    
    
*/
