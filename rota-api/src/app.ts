import express from 'express';
import { runCron } from './jobs/rotaCreation';
import { router } from './routers';
import cors from 'cors';

export const App = () => {
	const port = process.env.PORT || 8080;
	const app = express();

	runCron();
	app.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.use(
			cors({
				origin: '*',
				credentials: true,
				optionsSuccessStatus: 200,
			})
		)
		.use(router)
		.listen(port, () => {
			console.log(`listening: http://localhost:${port}`);
		});
};
