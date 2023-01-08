import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contactskSlise';
import { filterReducer } from './filterSlice';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
})


export const store = configureStore({
  reducer: rootReduser,
})
