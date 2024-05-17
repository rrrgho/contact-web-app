import { IContactItem } from "../d.type";
import { ActionType } from "./action.type";

export const SET_DIALING = (payload: IContactItem) => {
  return {
    type: ActionType.SET_DIALING,
    payload,
  };
};
export const END_DIALING = (payload: { status: boolean }) => {
  return {
    type: ActionType.END_DIALING,
    payload,
  };
};
