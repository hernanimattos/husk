import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface Config {
  baseURL: string;
  // [key: string]: string;
}

const instanceAxios = ({
  baseURL,
}: AxiosRequestConfig<Config>): AxiosInstance => {
  return axios.create({
    baseURL,
  });
};

export { instanceAxios };
