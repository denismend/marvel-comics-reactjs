import axios from 'axios';

import marvelConfig from '../config/marvel.api';
import { Md5Hasher } from '../utils/md5-hash';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
});

api.interceptors.request.use(async config => {
  const dateString = new Date().toDateString();
  let hash: string = `${dateString}${marvelConfig.privateKey}${marvelConfig.publicKey}`

  // add params to request
  config.params = {
    'ts': dateString,
    'apikey': marvelConfig.publicKey,
    'hash': Md5Hasher.hashString(hash)
  };

  return config;
});

export default api;
