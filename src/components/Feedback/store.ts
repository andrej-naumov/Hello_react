import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from './reducers';


const store = configureStore({
  reducer: feedbackReducer
});

export default store;
