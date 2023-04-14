import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/homeReducer";

const rootReducer = combineReducers({
  home: mainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
