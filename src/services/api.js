import axios from 'axios';
import md5 from 'js-md5';

import {PUBLIC_KEY, PRIVATE_KEY} from './publicAndPrivateKey';

const URL = 'https://gateway.marvel.com/v1/public/characters?';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: `${URL}ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
});

export default api;
