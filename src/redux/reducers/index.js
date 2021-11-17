import {responsesReducer} from './responsesReduser';
import {combineReducers} from 'redux';
import {usersReducer} from './usersReducer';

export const rootReducer = combineReducers({responsesReducer, usersReducer})
