// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { DialingState } from "./types";
import { IContactItem } from "@/d.type";

const initialState: DialingState = {
  status: false,
  id: "",
  firstName: "",
  lastName: "",
  age: "",
  photo: "",
  phone: "",
};

export const dialingSlice = createSlice({
  initialState,
  name: "dialingSlice",
  reducers: {
    DIALING_SET_STATUS: (state, { payload }: PayloadAction<boolean>): void => {
      state.status = payload;
    },
    DIALING_SET_CONTACT_SELECTED: (
      state,
      { payload }: PayloadAction<IContactItem>
    ): void => {
      state.id = payload.id;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.age = payload.age;
      state.phone = payload.phone;
    },
  },
});

// Mutations
export const { DIALING_SET_STATUS, DIALING_SET_CONTACT_SELECTED } =
  dialingSlice.actions;

export default dialingSlice.reducer;
