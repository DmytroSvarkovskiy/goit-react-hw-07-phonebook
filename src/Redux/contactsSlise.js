import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactSlise = createSlice({
  name: 'contacts',
  initialState: {items: [],
    isLoading: false,
    error: null
  },
  
  reducers: {
    addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
    removeContact: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload);
    state.items.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
     [fetchContacts.fulfilled](state,action) {
       state.isLoading = false;
       state.error = null;
       state.items = action.payload;
    },
    [fetchContacts.error](state, action) {
       state.isLoading = false;
       state.error = action.payload;
    }
  }
})
export const { addContact, removeContact } = contactSlise.actions;
export const contactsReduser = contactSlise.reducer;
