import express from 'express';
import {
	Request as IRequest,
	Response as IResponse,
} from 'express-serve-static-core';
import { RotaService } from '../services/rota';

export const router = express.Router();

router.get('/', async (_req: IRequest, res: IResponse) => {
	res.status(200).json({
		hello: 'world',
	});
});

router.get('/rota', async (_req: IRequest, res: IResponse) => {
	try {
		const rota = RotaService.getRota();
		res.status(200).json(rota);
	} catch (err) {
		const error = err as Error;
		console.log(error.message);
	}
});

router.get('/today', (_req: IRequest, res: IResponse) => {
	try {
		const todaysRota = RotaService.getTodaysSchedule();
		if (todaysRota) {
			res.status(200).json(todaysRota);
		}
		res.status(404).json({
			issue: 'data not found',
		});
	} catch (err) {
		const error = err as Error;
		console.log(error.message);
	}
});
