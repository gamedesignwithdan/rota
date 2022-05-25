export interface IRota {
	startDate: Date;
	endDate: Date;
	week1: IWeek;
	week2: IWeek;
}

export type IWeek = {
	[key in day]?: IShiftData;
};

interface IShiftData {
	employee: string;
	// timestamp: Date;
}

type day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export const weekdays = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
];
