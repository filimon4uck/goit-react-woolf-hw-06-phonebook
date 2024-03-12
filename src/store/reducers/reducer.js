import { contactsReducer } from 'store/contacts/contactsSlice';
import { filterReducer } from 'store/filter/filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
