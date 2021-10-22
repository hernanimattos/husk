import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => res.send('teste'));

const listenServerCallback = () => {};

app.listen(3030, listenServerCallback);
