import {
  DIALING_SET_CONTACT_SELECTED,
  DIALING_SET_STATUS,
} from "@/store/dialing/dialing.slice";
import { useAppStore } from "../libstore/hooks";
import { IContactItem } from "../d.type";
import { SET_DIALING } from "../store/action";

export const useDial = () => {
  const store = useAppStore();
  const onDialing = () => {
    store.dispatch(DIALING_SET_STATUS(true));
  };

  const onDialingSelectedContact = (payload: IContactItem) => {
    store.dispatch(DIALING_SET_CONTACT_SELECTED(payload));
  };

  const endDialing = () => {
    store.dispatch(DIALING_SET_STATUS(false));
  };

  return {
    onDialing,
    onDialingSelectedContact,
    endDialing,
  };
};
