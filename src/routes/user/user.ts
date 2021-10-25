import { AxiosResponse } from 'axios';
import { Request, Response, Router } from 'express';
import { http } from 'src/http';

const user = Router();

user.get('/', async (req: Request, res: Response) => {
  const { data } = await http.get<AxiosResponse>('/posts');

  res.status(200).json({
    ...data,
  });
});
user.get('/:id', async (req: Request, res: Response) => {
  const { data } = await http.get<AxiosResponse>('/posts');

  res.status(200).json({
    ...data,
  });
});

user.post('/', (req: Request, res: Response) => {
  res.json({
    name: 'vai',
  });
});

export { user };
