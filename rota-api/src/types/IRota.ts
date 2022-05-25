export interface IRota {
	startDate: Date;
	endDate: Date;
	week1: IWeek;
	week2: IWeek;
}

export interface IWeek {
	monday?: IShiftData;
	tuesday?: IShiftData;
	wednesday?: IShiftData;
	thursday?: IShiftData;
	friday?: IShiftData;
}

export interface IShiftData {
	morning: string;
	afternoon: string;
	date: Date;
}

export const weekdays = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
];
