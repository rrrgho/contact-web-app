import { IContactItem } from "../d.type";

interface IAction {
  type: string;
  payload?: IContactItem;
}

const DialingState: IContactItem = {
  status: false,
  first_name: "",
  last_name: "",
  age: "",
  photo: "",
  phone: "",
};

export const DialingReducer = (
  state: IContactItem = DialingState,
  action: IAction
) => {
  if (action.type === "SET_DIALING") {
    return {
      ...state,
      status: action.payload?.status,
      first_name: action.payload?.first_name,
      last_name: action.payload?.last_name,
      age: action.payload?.age,
      photo: action.payload?.photo,
      phone: action.payload?.phone,
    };
  }
  if (action.type === "END_DIALING") {
    return {
      ...state,
      status: action.payload?.status,
    };
  }
  return state;
};
