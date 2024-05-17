import { configureStore } from "@reduxjs/toolkit";
import reducer from "../store/reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { contactListApi } from "../services/contact";

export const makeStore = () => {
  return configureStore({
    [contactListApi.reducerPath]: contactListApi.reducer,
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contactListApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
setupListeners(makeStore().dispatch);
