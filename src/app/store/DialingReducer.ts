export type IDialingReducer = {
  status: boolean;
  name: string;
  phone: string;
};

interface IAction {
  type: string;
  payload?: IDialingReducer;
}

const DialingState: IDialingReducer = {
  status: false,
  name: "",
  phone: "",
};

export const DialingReducer = (
  state: IDialingReducer = DialingState,
  action: IAction
) => {
  if (action.type === "SET_DIALING") {
    return {
      ...state,
      status: action.payload?.status,
      name: action.payload?.name,
      phone: action.payload?.phone,
    };
  }
  return state;
};
