import {combineReducers} from 'redux';
import userListReducer from './userReducer';

export default combineReducers({
    users:userListReducer
})