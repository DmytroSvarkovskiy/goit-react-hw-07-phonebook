import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeContact } from "./contactsSlise";
axios.defaults.baseURL = 'https://63b7df854d97e82aa3c7f705.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get("/contacts");
      if (response.statusText !== 'OK') {
             throw new Error("Sorry, something went wrong'try again")
         }
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, {rejectWithValue,dispatch}) => {
        try {
        dispatch(removeContact(id))
        const response = await axios.delete(`/contacts/${id}`);
            if (response.statusText !== 'OK') {
             throw new Error("Sorry, we didn't delete this contact")
         }
      
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }

)
export const addContact = createAsyncThunk('contacts/addContact',
      async (id, {rejectWithValue,dispatch}) => {
    try {
        const response = await axios.post(`/contacts/${id}`);
        dispatch(addContact(id))
        console.log(response.data);
      
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)