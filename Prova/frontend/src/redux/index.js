import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import adminSlice from "./slices/adminSlice";
import uiSlice from "./slices/uiSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedAdminrReducer = persistReducer(persistConfig, adminSlice);

export const store = configureStore({
  reducer: {
    admin: persistedAdminrReducer,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
