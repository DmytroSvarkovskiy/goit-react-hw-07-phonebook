import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 
     ''
  ,
  reducers: {
    filtration: (state, action) => {
      return state = action.payload;
    },
  },
})
export const { filtration } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;