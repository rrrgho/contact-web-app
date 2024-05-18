import { combineReducers } from "@reduxjs/toolkit";
import dialing from "./dialing/dialing.slice";
import contactList from "./contactlist/contactlist.slice";
import { contactListApi as contactApi } from "@/store/contact/contact.api";

export default combineReducers({
  dialing,
  contactList,
  [contactApi.reducerPath]: contactApi.reducer,
});
