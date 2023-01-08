import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeContact, toAddContact } from "./contactsSlise";

axios.defaults.baseURL = 'https://63b7df854d97e82aa3c7f705.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get("/contacts");
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
        await axios.delete(`/contacts/${id}`);
       
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }

)
export const addContact = createAsyncThunk('contacts/addContact',
      async (subscriber, {rejectWithValue,dispatch}) => {
          try {
          const response=await axios.post(`/contacts`, subscriber);
          dispatch(toAddContact(response.data));

      
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)