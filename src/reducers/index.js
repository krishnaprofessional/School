import { combineReducers } from 'redux';
import Classes from './ClassesReducer';
import Students from './UnassignedReducer';

const rootReducer = combineReducers({
Classes,
Students
});

export default rootReducer;
