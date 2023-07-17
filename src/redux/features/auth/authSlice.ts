import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthSlice } from "./auth.interface";

const initialState: IAuthSlice = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IAuthSlice>) => {
      state.accessToken = action.payload.accessToken;
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
