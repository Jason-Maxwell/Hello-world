import {combineReducers} from 'redux';
import userListReducer from './reducer';

export default combineReducers({
    users:userListReducer
})