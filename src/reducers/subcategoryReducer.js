import { LIST_SUBCATEGORIES, GET_SUBCATEGORY, UPDATE_SUBCATEGORY } from '../actions/types';

const initialState = {
  subCategoryItems: [],
  subCategoryItem:{
    serviceTypeName: '',
    serviceName: ''
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_SUBCATEGORIES:
        console.log('xxxxxxxxxxxx', action.type);
      return {
        ...state,
        subCategoryItems: action.payload
      };
    case UPDATE_SUBCATEGORY:
      return {
        ...state,
        subCategoryItems: action.payload[0].subCategory
      };
    case GET_SUBCATEGORY:
      console.log('Inside Reduced:', GET_SUBCATEGORY);
      console.log('Reduced Payload:', action.payload);
      return {
        ...state,
        subCategoryItem: {
          serviceType: action.payload[0].serviceType,
          serviceName: action.payload[0].subCategory
        }
      };
    default:
      return state;
  }
}