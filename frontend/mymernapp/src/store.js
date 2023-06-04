import { configureStore } from '@reduxjs/toolkit';
import  alertReducer  from './alertSlice';
import  userReducer from './userSlice';

export default configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
  },
});