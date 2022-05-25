import { RequestService } from '../request';

export const rotaJSON = () => RequestService.read('src/json/rota.json');
