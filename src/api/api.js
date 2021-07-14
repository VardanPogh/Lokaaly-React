import axios from 'axios';
import { history } from '../..';

axios.defaults.baseURL = "https://api-lokaaly.herokuapp.com/";

axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, error => {
  if (error.message === 'Network Error' && !error.response) {
    // toast.error('Network error - make sure API is running!');
  }

  const { status, data, config, headers } = error.response;
  if (status === 404) {
    history.push('/notfound');
  }
  if (status === 401 && headers['www-authenticate'] === 'Bearer error="invalid_token", error_description="The token is expired"') {
    window.localStorage.removeItem('jwt');
    // toast.info('Your session has expired, please login again')
  }
  if (
    status === 400 &&
    config.method === 'get' &&
    data.errors.hasOwnProperty('id')
  ) {
    history.push('/notfound');
  }
  if (status === 500) {
    // toast.error('Server error - check the terminal for more info!');
  }
  throw error.response;
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) =>
    axios
      .get(url)
      .then(responseBody),
  post: (url, body) =>
    axios
      .post(url, body)
      .then(responseBody),
  put: (url, body) =>
    axios
      .put(url, body)
      .then(responseBody),
  del: (url) =>
    axios
      .delete(url)
      .then(responseBody),
  postForm: (url, file) => {
    let formData = new FormData();
    formData.append('File', file);
    return axios
      .post(url, formData, {
        headers: { 'Content-type': 'multipart/form-data' }
      })
      .then(responseBody);
  }
};

export const User = {
    login: (user) => requests.post(`/users/login`, user),
    signup: (user) => requests.post(`/users/sign-up`, user),
};
