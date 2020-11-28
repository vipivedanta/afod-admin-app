import { LIST_SERVICETYPES, GET_SERVICETYPE, UPDATE_SERVICETYPES } from '../actions/types';

const initialState = {
  items: [],
  item:{
    serviceTypeName: '',
    serviceName: ''
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_SERVICETYPES:
      return {
        ...state,
        items: action.payload
      };
    case UPDATE_SERVICETYPES:
      return {
        ...state,
        item: action.payload[0].serviceType
      };
    case GET_SERVICETYPE:
      console.log('Inside Reduced:', GET_SERVICETYPE);
      console.log('Reduced Payload:', action.payload);
      return {
        ...state,
        item: {
          serviceType: action.payload[0].serviceType,
          serviceName: action.payload[0].service
        }
      };
    default:
      return state;
  }
}