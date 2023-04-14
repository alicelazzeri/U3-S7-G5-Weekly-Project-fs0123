import { GET_HIP_HOP, GET_POP, GET_ROCK, GET_SEARCH, GET_SONG, RESET_SEARCH } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
  query: "",
  search: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_HIP_HOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    case GET_SONG:
      return {
        ...state,
        query: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case RESET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
