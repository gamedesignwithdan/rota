import express from 'express';
import { runCron } from './jobs/rotaCreation';
import { router } from './routers';

export const App = () => {
	const port = process.env.PORT || 8080;
	const app = express();

	runCron();
	app.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.use(router)
		.listen(port, () => {
			console.log(`listening: http://localhost:${port}`);
		});
};
