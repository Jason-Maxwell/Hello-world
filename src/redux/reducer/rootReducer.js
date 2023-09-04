import {combineReducers} from 'redux';
//import userListReducer from './reducer';
import peopleReducer from './reducer';

export default combineReducers({
    //users:userListReducer
    users:peopleReducer
})