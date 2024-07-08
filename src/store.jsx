import { configureStore } from '@reduxjs/toolkit';
import LogInSlice from '../src/LogInSlice';


export const store = configureStore({
  reducer: {
    login:LogInSlice,
  },
})