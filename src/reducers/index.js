import { combineReducers } from 'redux';
import serviceTypeReducer from './servicetypeReducer';

export default combineReducers({
    serviceType: serviceTypeReducer
});