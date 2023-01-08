import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
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

