import axios from 'axios';

const baseURL = 'https://snip.labwired.tech';

const instance = axios.create({
  baseURL: baseURL
});

export default instance;
