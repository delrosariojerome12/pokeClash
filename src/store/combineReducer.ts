import { combineReducers } from "@reduxjs/toolkit";
import masterDexReducer from "@reducers/masterDexReducer";

export const rootReducer = combineReducers({
  masterDex: masterDexReducer,
});
