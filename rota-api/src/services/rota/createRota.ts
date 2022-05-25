import { weekdays, IWeek, IRota } from '../../types/IRota';
import { getRandomOrderEmployees } from '../employees';
import { RequestService } from '../request';

function addDays(date: Date, days: number) {
	const copy = new Date(date);
	copy.setDate(date.getDate() + days);
	return copy;
}

const createRotaObject = (): IRota => {
	const startDate = new Date();
	const endDate = new Date();

	endDate.setDate(endDate.getDate() + 14);

	return {
		startDate,
		endDate,
		week1: getWeeklyRota(startDate),
		week2: getWeeklyRota(addDays(startDate, 7)),
	};
};

const getWeeklyRota = (date: Date): IWeek => {
	const employees = getRandomOrderEmployees();
	let counter = 0;
	let n = 1;

	return weekdays.reduce((week, day) => {
		const update = {
			...week,
			[day]: {
				morning: employees[counter],
				afternoon: employees[counter + 1],
				date: addDays(date, n),
			},
		};
		n += 1;
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
