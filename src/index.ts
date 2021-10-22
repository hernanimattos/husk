import express, { Request, Response } from 'express';
import { routes } from './routes';

const app = express();

app.use(routes);

app.get('/', (req: Request, res: Response) => res.send('teste'));

const listenServerCallback = () => {};

app.listen(3030, listenServerCallback);
