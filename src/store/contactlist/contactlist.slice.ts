// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IContactItem } from "@/d.type";

interface IList {
  data: Array<IContactItem>;
}

const initialState: IList = {
  data: [],
};

export const contactListSlice = createSlice({
  initialState,
  name: "contactListSlice",
  reducers: {
    SET_CONTACT_LIST: (
      state,
      { payload }: PayloadAction<Array<IContactItem> | any>
    ): void => {
      state.data = [...payload, ...state.data];
    },
    SET_APPEND_CONTACT_LIST: (
      state,
      { payload }: PayloadAction<IContactItem>
    ): void => {
      state.data = [payload, ...state.data];
    },
    SET_EDIT_SPECIFIC_CONTACT: (
      state,
      { payload }: PayloadAction<IContactItem>
    ): void => {
      const findIndexOfSelectedContact = state.data.findIndex(
        (x) => x.id === payload.id
      );
      state.data[findIndexOfSelectedContact].firstName = payload.firstName;
      state.data[findIndexOfSelectedContact].lastName = payload.lastName;
      state.data[findIndexOfSelectedContact].age = payload.age;
      state.data[findIndexOfSelectedContact].phone = payload.phone;
      state.data[findIndexOfSelectedContact].photo = payload.photo;
    },
    SET_DELETE_SPECIFIC_CONTACT: (
      state,
      { payload }: PayloadAction<IContactItem>
    ): void => {
      const filterContactLists = state.data.filter((x) => x.id !== payload.id);
      state.data = filterContactLists;
    },
  },
});

export const {
  SET_CONTACT_LIST,
  SET_APPEND_CONTACT_LIST,
  SET_EDIT_SPECIFIC_CONTACT,
  SET_DELETE_SPECIFIC_CONTACT
} = contactListSlice.actions;

export default contactListSlice.reducer;
