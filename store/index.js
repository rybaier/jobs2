import { compose, applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, autoRehydrate } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import localStorage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import reducers from '../reducers';
//redux-persist v4 being used! redux-persist v6 has more steps involved for persisting the store.
//persistStore error is from deprecation 
// use documentation, persistConfig persistReducer etc.
const store = createStore(
    reducers, 
    {},
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
)

persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs']})
export default store;
