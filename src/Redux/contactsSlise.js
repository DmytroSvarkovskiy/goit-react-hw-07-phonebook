import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,deleteContact,addContact } from './operations';


const contactSlise = createSlice({
  name: 'contacts',
  initialState: {items: [],
    isLoading: false,
    error: null
  },
  
  reducers: {
    toAddContact: (state, action) => {
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
      state.error = null;
    },
     [fetchContacts.fulfilled](state,action) {
       state.isLoading = false;
       state.error = null;
       state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
       state.isLoading = false;
       state.error = action.payload;
    },
     [deleteContact.pending](state) {
       state.isLoading = true;
       state.error = null;
    },
     [deleteContact.fulfilled](state) {
       state.isLoading = false;
       state.error = null;
      
    },
    [deleteContact.rejected](state, action) {
       state.isLoading = false;
       state.error = action.payload;
    },
      [addContact.pending](state) {
       state.isLoading = true;
       state.error = null;
    },
     [addContact.fulfilled](state) {
       state.isLoading = false;
       state.error = null;
      
    },
    [addContact.rejected](state, action) {
       state.isLoading = false;
       state.error = action.payload;
    },
    
  }
})
export const { toAddContact, removeContact } = contactSlise.actions;
export const contactsReduser = contactSlise.reducer;
