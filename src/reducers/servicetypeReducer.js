import { FETCH_SERVICETYPES, UPDATE_SERVICETYPES } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICETYPES:
      return {
        ...state,
        items: action.payload
      };
    case UPDATE_SERVICETYPES:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}