import axios from 'axios';

const instanceAxios = (baseURL: string, params: any) => {
  return axios.create({
    baseURL,
    ...params,
  });
};

export { instanceAxios };
