import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65baa40fb4d53c06655360fb.mockapi.io/api',
});

export const apiService = async () => {
  const { data } = await instance(`/advert/?limit=12&page=1`);
  console.log(data);
  return data;
};
