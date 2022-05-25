import cron from 'node-cron';
import fs from 'fs';
import { RotaService } from '../services/rota';
import { RequestService } from '../services/request';

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

export function runCron() {
	const isRotaThere = Boolean(RequestService.read('src/json/rota.json'));

	if (!isRotaThere) {
		RotaService.createRota();
	}
	// this is once every two seconds
	// cron.schedule('*/2 * * * * *', () => {
	cron.schedule('01 00 * * * Mon', () => {
		// this is once every Monday at 1 minute past midnight
		setUpdatable();
	});
}

const setUpdatable = () => {
	const isUpdatabale = JSON.parse(
		fs.readFileSync('src/json/rotaInfo.json', 'utf8')
	);

	/* 
		the cron runs once a week on Sunday 
		it checks to see if it should update this week (isUpdateWeek)
		each week it changes the value of isUpdateWeek to it's opposite boolean value.
		when isUpdateWeek is true, we update the rota.
	*/
	if (isUpdatabale.isUpdateWeek) {
		isUpdatabale.isUpdateWeek = false;
		fs.writeFileSync(
			'src/json/rotaInfo.json',
			JSON.stringify(isUpdatabale)
		);
		RotaService.createRota();
	} else {
		isUpdatabale.isUpdateWeek = true;
		fs.writeFileSync(
			'src/json/rotaInfo.json',
			JSON.stringify(isUpdatabale)
		);
	}
};

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
