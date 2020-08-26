import axios from 'axios';

axios.interceptors.request.use(async (config) => {

  const dateString = new Date().toDateString();


  // add params to request
  config.params = {
    'ts': new Date().toDateString(),
    'apiKey': '',
    'hash':
  };

  return config;
}, (error) => {
  return Promise.reject(error);
});
