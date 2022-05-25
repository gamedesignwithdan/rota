import { weekdays, IWeek, IRota } from '../../types/IRota';
import { getRandomOrderEmployees } from '../employees';
import { RequestService } from '../request';

const createRotaObject = (): IRota => {
	const startDate = new Date();
	const endDate = new Date();

	endDate.setDate(endDate.getDate() + 14);

	return {
		startDate,
		endDate,
		week1: getWeeklyRota(),
		week2: getWeeklyRota(),
	};
};

const getWeeklyRota = (): IWeek => {
	const employees = getRandomOrderEmployees();
	let counter = 0;

	return weekdays.reduce((week, day) => {
		const update = {
			...week,
			[day]: {
				morning: employees[counter],
				afternoon: employees[counter + 1],
			},
		};
		counter += 2;
		return update;
	}, {});
};

export const createRota = () => {
	return RequestService.createAndFetch(
		'src/json/rota.json',
		JSON.stringify(createRotaObject())
	);
};
