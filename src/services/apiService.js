import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65baa40fb4d53c06655360fb.mockapi.io/api',
});

export const apiService = async (
  { method, url, data, ...config },
  errorHandler = (error) => {
    return error;
  }
) => {
  try {
    const response = await instance.request({ method, url, data, config });
    return response.data;
  } catch (error) {
    return errorHandler(error);
  }
};
