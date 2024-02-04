import { createSlice } from '@reduxjs/toolkit';
import { getAdvert, getAdvertFilter } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  filter: {
    price: '',
    make: '',
    from: '',
    to: '',
  },
  isLoading: false,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdvert.pending, (state) => {
        state.isLoading = true;
      })
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
        state.isLoading = false;
      })
      .addCase(getAdvert.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAdvertFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdvertFilter.fulfilled, (state, { payload }) => {
        // console.log(payload);
        const filter = payload.filter((itm) => {
          if (state.filter.price === '') {
            return itm;
          }

          if (
            state.filter.price !== '' ||
            state.filter.make !== ''
            // state.filter.from !== '' ||
            // state.filter.to !== ''
          ) {
            return (
              Number(itm.rentalPrice.replace('$', '')) <=
              Number(state.filter.price)
            );
            // (itm.mileage >= state.filter.from &&
            //   itm.mileage <= state.filter.to)
          }

          if (state.filter.from !== '' || state.filter.to !== '') {
            return (
              itm.mileage >= state.filter.from
              // || itm.mileage <= state.filter.to
            );
          }

          // return (
          //   Number(itm.rentalPrice.replace('$', '')) <=
          //   Number(state.filter.price)
          // );

          // return itm;
        });
        state.cars = filter;
        state.isLoading = false;
      })
      .addCase(getAdvertFilter.rejected, (state) => {
        state.isLoading = false;
      });
  },

  reducers: {
    filterCars: (state, { payload }) => {
      console.log(payload);
      state.filter.price = payload.price;
      state.filter.make = payload.make;
      state.filter.from = payload.from;
      state.filter.to = payload.to;
    },

    setFavorite: (state, { payload }) => {
      if (!state.favorites || !Array.isArray(state.favorites)) {
        state.favorites = [];
      }
      if (!state.favorites.find((car) => car.id === payload.id)) {
        state.favorites = [...state.favorites, payload];
      }
      return state;
    },
    removeFavorite(state, { payload }) {
      const car = state.favorites.filter(({ id }) => id !== payload.id);
      state.favorites = car;
    },
  },
});

export const advertReducer = advertSlice.reducer;
export const { filterCars, setFavorite, removeFavorite } = advertSlice.actions;
