import { GET_ALBUM } from "../actions";

const initialState = {
  album: null,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};

export default albumReducer;
