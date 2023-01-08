import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlise';
import { filterReducer } from './filterSlice';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
})


export const store = configureStore({
  reducer: rootReduser,
})
