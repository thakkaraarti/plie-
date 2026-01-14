import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import 
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 10000, // Set a custom timeout (default is 5000ms)
};

const persistedReducer = persistReducer(persistConfig, userReducer);


const store = configureStore({
  reducer: {
    user: persistedReducer,
    

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  
    }),
});

export const persistor = persistStore(store);
export default store;
