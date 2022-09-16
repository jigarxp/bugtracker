import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import bugReducer from '../features/bugSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    bug: bugReducer,
  },
});
