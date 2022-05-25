import fs from 'fs';
import { weekdays, IWeek, IRota } from '../../types/IRota';
import { getEmployees } from '../employees';
import { RequestService } from '../request';

const createRotaObject = (): IRota => {
	const employees = getEmployees();
	let counter = 0;

	const startDate = new Date();
	const endDate = new Date();

	endDate.setDate(endDate.getDate() + 14);

	const weeklyRota: IWeek = weekdays.reduce((week, day) => {
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

	return {
		startDate,
		endDate,
		week1: weeklyRota,
		week2: weeklyRota,
	};
};

export const createRota = () => {
	return RequestService.createAndFetch(
		'src/services/rota/rota.json',
		JSON.stringify(createRotaObject())
	);
};
