import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './advert/slice';

export const store = configureStore({
  reducer: {
    advert: advertReducer,
  },
});
