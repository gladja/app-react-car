import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services';
import { notification } from 'antd';

export const getAdvert = createAsyncThunk('advert/getAdvert', async (page) => {
  const data = await apiService(
    {
      method: 'get',
      url: `/advert/?limit=12&page=${page}`,
    },
    (error) => {
      notification.error({
        message: 'Error',
        description: `${error.message}`,
      });
    }
  );
  return data;
});

export const getAdvertFilter = createAsyncThunk(
  'advert/getAdvertFilter',
  async ({ make, page }) => {
    const data = await apiService(
      {
        method: 'get',
        url: `/advert/?make=${make}&limit=12&page=${page}`,
      },
      (error) => {
        notification.error({
          message: 'Error',
          description: `${error.message}`,
        });
      }
    );
    return data;
  }
);
