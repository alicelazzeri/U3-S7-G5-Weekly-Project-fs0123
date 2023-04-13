import { combineReducers, configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
