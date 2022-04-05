import { combineReducers } from "@reduxjs/toolkit";

import onlineReducer from "reducers/onlineSlice";

const reducer = combineReducers({
  network: onlineReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
