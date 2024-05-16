import { IDialingReducer } from "./DialingReducer";
import { ActionType } from "./action.type";

export const SET_DIALING = (payload: IDialingReducer) => {
  return {
    type: ActionType.SET_DIALING,
    payload,
  };
};
