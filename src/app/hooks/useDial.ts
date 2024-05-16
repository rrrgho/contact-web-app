import { IContactItem } from "../d.type";
import { useAppSelector, useAppStore } from "../lib/hooks";
import { END_DIALING, SET_DIALING } from "../store/action";

export const useDial = () => {
  const store = useAppStore();
  const contactSelected: IContactItem = useAppSelector(
    (state) => state.DialingReducer
  );

  const onDialing = (payload: IContactItem) => {
    store.dispatch(SET_DIALING(payload));
  };

  const onDialingSelectedContact = () => {
    const payload = { status: true };
    store.dispatch(END_DIALING(payload));
  };

  const endDialing = () => {
    const payload = { status: false };
    store.dispatch(END_DIALING(payload));
  };

  return {
    onDialing,
    onDialingSelectedContact,
    endDialing,
  };
};
