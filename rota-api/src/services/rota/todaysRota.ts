import { RotaService } from '.';
import { IShiftData, IWeek, weekdays } from '../../types/IRota';

export const todaysRota = (): IShiftData | undefined => {
	const rota = RotaService.getRota();
	const today = new Date();
	let matchedDay;

	if (rota) {
		const rotaWeek1: IWeek = rota.week1,
			rotaWeek2: IWeek = rota.week2;

		weekdays.forEach((day) => {
			const exampleDay1 = rotaWeek1[day as keyof IWeek];
			const exampleDay2 = rotaWeek2[day as keyof IWeek];

			if (exampleDay1) {
				const date1 = new Date(exampleDay1.date).getDate();
				if (date1 == today.getDate()) {
					matchedDay = exampleDay1;
				}
			}

			if (exampleDay2) {
				const date2 = new Date(exampleDay2.date).getDate();
				if (date2 == today.getDate()) {
					matchedDay = exampleDay2;
				}
			}
		});
	}

	return matchedDay;
};
