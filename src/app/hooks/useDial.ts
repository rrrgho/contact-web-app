import { useAppStore } from "../lib/hooks";
import { IDialingReducer } from "../store/DialingReducer";
import { SET_DIALING } from "../store/action";

export const useDial = () => {
  const store = useAppStore();

  const onDialing = (payload: IDialingReducer) => {
    store.dispatch(SET_DIALING(payload));
  };

  const endDialing = () => {
    store.dispatch(SET_DIALING({ status: false, name: "", phone: "" }));
  };

  return {
    onDialing,
    endDialing,
  };
};
