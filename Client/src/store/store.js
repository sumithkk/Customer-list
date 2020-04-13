import { createStore, applyMiddleware } from "redux";
import customers from '../reducers/customer';
import thunk from 'redux-thunk';

export default () => {
    return createStore(customers, applyMiddleware(thunk));
};