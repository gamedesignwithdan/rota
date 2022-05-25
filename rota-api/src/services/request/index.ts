import fs from 'fs';
import { IRota } from '../../types/IRota';
import { RotaService } from '../rota';

const read = (path: string): IRota | null => {
	try {
		return JSON.parse(fs.readFileSync(path, 'utf8'));
	} catch (err) {
		return RotaService.createRota();
	}
};

const create = (path: string, object: string): void =>
	fs.writeFileSync(path, object);

const createAndFetch = (path: string, object: string): IRota | null => {
	try {
		create(path, object);
		const result = read(path);
		if (!result) {
			throw new Error('Failed to read this file');
		}
		return result;
	} catch (err) {
		console.log(err);
		return null;
	}
};

export const RequestService = {
	read,
	create,
	createAndFetch,
};
