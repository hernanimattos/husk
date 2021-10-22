import { instanceAxios } from './config/config';

const http = instanceAxios({ baseURL: 'https://jsonplaceholder.typicode.com' });

export { http };
