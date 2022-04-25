import axios from 'axios';
import type { AxiosResponse } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_URL as string;

const Api = {
  get(url: string): Promise<AxiosResponse> {
    return axios.get(url);
  },
  post(url: string, data: any): Promise<AxiosResponse> {
    return axios.post(url, data);
  },
  put(url: string, data: any): Promise<AxiosResponse> {
    return axios.put(url, data);
  },
  delete(url: string): Promise<AxiosResponse> {
    return axios.delete(url);
  },
};

export { Api };