import axios from 'axios';
import type { AxiosResponse } from 'axios';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = import.meta.env.VITE_APP_URL as string;

const Api = {
  get(url: string, parameters = {}): Promise<AxiosResponse> {
    return axios.get(url, { params: parameters });
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
