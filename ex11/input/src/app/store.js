import { configureStore } from '@reduxjs/toolkit';
import numberSlice from '../reducers/formSlice';
import photoSlice from '../reducers/photoSlice';

export const store = configureStore({
  reducer: {
    number: numberSlice,
    photo: photoSlice,
  },
});
