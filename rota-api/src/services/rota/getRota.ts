import fs from 'fs';

export const rotaJSON = () =>
	JSON.parse(fs.readFileSync('src/services/rota/rota.json', 'utf8'));
