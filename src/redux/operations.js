import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "services/contactsApi";

export const fetchContacts = createAsyncThunk(
     'contacts/fetchContacts',
  async () => {
    const response = await contactsApi.fetchContacts()
    return response.data
  }
)