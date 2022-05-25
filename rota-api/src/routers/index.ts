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
		console.log(rota);
		res.status(200).json(rota);
	} catch (err) {
		const error = err as Error;
		console.log(error.message);
	}
});
