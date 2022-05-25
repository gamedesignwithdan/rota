import fs from 'fs';

export const rotaJSON = () =>
	JSON.parse(fs.readFileSync('src/json/rota.json', 'utf8'));
