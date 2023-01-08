import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,deleteContact,addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlise = createSlice({
  name: 'contacts',
  initialState: {items: [],
    isLoading: false,
    error: null
  },
  
  // reducers: {
  //   toAddContact: (state, action) => {
  //     state.items.unshift(action.payload);
  //   },
  //   removeContact: (state, action) => {
  //     const index = state.items.findIndex(task => task.id === action.payload);
  //   state.items.splice(index, 1);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending]:handlePending,
    [fetchContacts.fulfilled](state,action) {
       state.isLoading = false;
       state.error = null;
       state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [deleteContact.pending]:handlePending,
    [deleteContact.fulfilled](state,action) {
       state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
    state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    
    [addContact.pending]:handlePending,
},
  [addContact.fulfilled](state, action) {
       state.isLoading = false;
      state.error = null;
           return state.items.shift(action.payload)

    },
    [addContact.rejected]:handleRejected,
    
  }
)
// export const { toAddContact, removeContact } = contactSlise.actions;
export const contactsReduser = contactSlise.reducer;
