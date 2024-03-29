import persistStore from 'redux-persist/es/persistStore';
import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer });

export const persistor = persistStore(store);
