import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contactskSlise';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
}
const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReduser)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);
