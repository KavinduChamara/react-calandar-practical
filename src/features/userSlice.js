import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: ""
};

export const login = createAsyncThunk("user/login", () => {
  return axios
  .post(
    `https://api.arenaracingcompany.co.uk/auth`,
    {},
    {
      headers: {
        "Authorization": "Bearer 264c77f740cc1f02cac8f0a7e30ccdcd2f20dcf5",
      },
    }
  )
  .then((res) => {
    localStorage.setItem('JWT', res.data);
    window.location.href = "/to-do";
  })
  .catch((err) => {
    console.log(err);
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
        console.log(action)
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    
    
  },
});
  
//reducer
export default userSlice.reducer;

