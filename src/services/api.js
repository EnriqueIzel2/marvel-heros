import axios from 'axios';
import md5 from 'js-md5';

const PUBLIC_KEY = 'e5c690a87b4a4141888bfda0816b329d';
const PRIVATE_KEY = '18dc8db2176d209e9908003ce79f1fa1a3d9d044';
const URL = 'https://gateway.marvel.com/v1/public/characters?';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const api = axios.create({
  baseURL: `${URL}ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
});

export default api;
