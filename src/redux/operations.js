import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = "https://646a14b1183682d6144d2ef5.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk(
     'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get();
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addContact = createAsyncThunk(
     'contacts/addContact',
async (text, thunkAPI) => {
    try {
        const response = await axios.post("/", {...text});
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteContact  = createAsyncThunk(
     'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`${id}`);
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
)