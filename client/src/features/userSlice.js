import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isRegister: false,
  validUser: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openRegister: (state) => {
      state.isRegister = true;
    },
    closeRegister: (state) => {
      state.isRegister = false;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.validUser = true;
    },
    logout: (state) => {
      state.user = null;
      state.validUser = false;
    },
  },
});

export const { openRegister, closeRegister, login, logout } = userSlice.actions;

export default userSlice.reducer;
