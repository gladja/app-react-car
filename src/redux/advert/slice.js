import { createSlice } from '@reduxjs/toolkit';
import { getAdvert, getAdvertFilter } from './operations';

const initialState = {
  cars: [],
  favorites: null,
  price: '',
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdvert.fulfilled, (state, { payload }) => {
        // state.cars = payload;
        // console.log(payload);
        // if (state.cars.length === 0) {
        //   state.cars = payload;
        // }
        // if (state.cars.length !== ) {
        //   state.cars = [...payload];
        // }
        state.cars = [...payload];
      })
      .addCase(getAdvertFilter.fulfilled, (state, { payload }) => {
        // console.log(payload);
        const filter = payload.filter((itm) => {
          if (state.price === '') {
            return itm;
          }
          return (
            Number(itm.rentalPrice.replace('$', '')) <= Number(state.price)
          );
        });
        console.log(filter);
        state.cars = filter;
      });
  },

  reducers: {
    filterCars: (state, { payload }) => {
      console.log(payload);
      state.price = payload;
    },
  },
});

export const advertReducer = advertSlice.reducer;
export const { filterCars } = advertSlice.actions;
