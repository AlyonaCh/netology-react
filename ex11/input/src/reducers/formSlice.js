import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};



export const  numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    change: (state, action) => {
      state.number = action.payload;
    }
  }
});

export const { change } = numberSlice.actions;

export const selectNumber = (state) => state.number.number;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };


export default numberSlice.reducer;
