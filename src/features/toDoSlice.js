import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  toDos: [],
  error: "",
  selected: {},
};

export const fetchItems = createAsyncThunk("item/fetchItems", (month) => {
  return axios
    .get(`https://api.arenaracingcompany.co.uk/event/month/1318/${month}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT')}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.data === 'Access Denied') {
          window.location.href = "/";
        }
      });
});
  
const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  extraReducers: (builder) => {
    //Fetch items
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.toDos = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.toDos = [];
      state.error = action.error.message;
    });
  },
});
  
//reducer
export default toDoSlice.reducer;

