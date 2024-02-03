import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services';

export const getAdvert = createAsyncThunk('advert/getAdvert', async (page) => {
  const data = await apiService(
    {
      method: 'get',
      url: `/advert/?limit=12&page=${page}`,
    },
    (error) => {
      console.log(error.message);
      //add notification error
    }
  );
  return data;
});

export const getAdvertFilter = createAsyncThunk(
  'advert/getAdvertFilter',
  async ({ make, page }) => {
    // console.log(make, page);
    const data = await apiService(
      {
        method: 'get',
        // url: `/advert/?make=${make}&limit=12&page=${page}`,
        url: `/advert/?make=${make}`,
      },
      (error) => {
        console.log(error.message);
        //add notification error
      }
    );
    // console.log(data);
    return data;
  }
);
