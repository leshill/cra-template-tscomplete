import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import reducer from "reducers";
import { onlineStatusChange } from "reducers/onlineSlice";
import registerOnlineListener from "utils/onlineListener";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: reducer,
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
});

export type AppDispatch = typeof store.dispatch;

registerOnlineListener((status) => {
  store.dispatch(onlineStatusChange(status));
});

store.dispatch(onlineStatusChange(window.navigator.onLine));

export default store;
