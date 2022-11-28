import { compose, applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import reducers from '../reducers';

const store = createStore(
    reducers, 
    {},
    compose(
        applyMiddleware(thunk)
    )
)

export default store;
