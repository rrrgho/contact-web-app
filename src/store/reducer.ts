import { combineReducers } from "@reduxjs/toolkit";
import dialing from "./dialing/dialing.slice";
import { contactListApi as contactApi } from "@/store/contact/contact.api";

export default combineReducers({
  dialing,
  [contactApi.reducerPath]: contactApi.reducer,
});
