import { createSlice } from '@reduxjs/toolkit';
import { getAdvert, getAdvertFilter } from './operations';

const initialState = {
  cars: [],
  favorites: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdvert.fulfilled, (state, { payload }) => {
        //   console.log(payload);
        state.cars = payload;
      })
      .addCase(getAdvertFilter.fulfilled, (state, { payload }) => {
        //   console.log(payload);
        state.cars = payload;
      });
  },
});

export const advertReducer = advertSlice.reducer;
