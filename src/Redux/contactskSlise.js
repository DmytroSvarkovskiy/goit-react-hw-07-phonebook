import { createSlice } from '@reduxjs/toolkit'

const contactSlise = createSlice({
  name: 'contacts',
  initialState: {items: [],
    isLoading: false,
    error: null}
      
  ,
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload);
    state.items.splice(index, 1);
    },
  },
})
export const { addContact, removeContact } = contactSlise.actions;
export const contactsReduser = contactSlise.reducer;
