import { IContactItem } from "@/d.type";
import { useAppSelector, useAppStore } from "@/libstore/hooks";
import { useCreateContactMutation } from "@/store/contact/contact.api";
import {
  SET_APPEND_CONTACT_LIST,
  SET_DELETE_SPECIFIC_CONTACT,
  SET_EDIT_SPECIFIC_CONTACT,
} from "@/store/contactlist/contactlist.slice";
import { DIALING_SET_CONTACT_SELECTED } from "@/store/dialing/dialing.slice";
import { useState } from "react";

export const useContactApi = () => {
  const store = useAppStore();
  const [insertProcess, setInsertProcess] = useState<boolean>(false);
  const [createContact, { error, isLoading }] = useCreateContactMutation();
  const contactList = useAppSelector((state) => state.contactList.data);

  const handleAddContact = (payload: IContactItem, afterAction: Function) => {
    setInsertProcess(true);
    const payloadToStoreOnReducer = payload;
    delete payload.id;
    try {
      createContact({ payload }).unwrap();
      if (!isLoading) {
        delete payload.id;
        store.dispatch(SET_APPEND_CONTACT_LIST(payloadToStoreOnReducer));
        setInsertProcess(false);
        afterAction();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditContact = (payload: IContactItem, afterAction: Function) => {
    store.dispatch(SET_EDIT_SPECIFIC_CONTACT(payload));
    store.dispatch(DIALING_SET_CONTACT_SELECTED(payload));
    afterAction();
  };

  const handleDeleteContact = (
    payload: IContactItem,
    afterAction: Function
  ) => {
    store.dispatch(SET_DELETE_SPECIFIC_CONTACT(payload));
    store.dispatch(DIALING_SET_CONTACT_SELECTED(contactList[0]));
    afterAction();
  };

  return {
    handleAddContact,
    handleEditContact,
    handleDeleteContact,
    insertProcess,
  };
};
