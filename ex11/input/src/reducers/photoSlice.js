import {  createSlice } from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';
const initialState = {
  photo: [],
  selected: ''
};



export const  photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    change: (state, action) => {
      state.photo.push({id: nanoid(), src: action.payload});
    },
    select: (state, action) => {
      state.selected = URL.createObjectURL(action.payload);
    }
  }
});

export const { change, select } = photoSlice.actions;

export const selectPhoto = (state) => state.photo.selected;

export const selectPhotos = (state) => state.photo.photo;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };


export default photoSlice.reducer;
