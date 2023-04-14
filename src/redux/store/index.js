import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/homeReducer";
import albumReducer from "../reducers/albumReducer";

const rootReducer = combineReducers({
  home: mainReducer,
  album: albumReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
