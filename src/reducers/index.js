import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import subcategoryReducer from './subcategoryReducer'

export default combineReducers({
    services: serviceReducer,
    subCategories: subcategoryReducer
});