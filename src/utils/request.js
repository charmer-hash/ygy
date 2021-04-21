import axios from 'axios';
import { showMessage } from '../plugins/message';
import { getToken } from './auth';

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = getToken() ?? '';

    if (!token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    const { data: result } = response;

    if (result.code !== 200) {
      showMessage({ type: 'error', message: result.message });
    }

    return result;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
