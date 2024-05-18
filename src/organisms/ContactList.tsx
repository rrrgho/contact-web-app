"use client";
import { IContactItem } from "@/d.type";
import { useGetContactAllQuery } from "@/store/contact/contact.api";
import { FC, useEffect } from "react";
import Label from "../app-components/Label";
import { useDial } from "../hooks/useDial";
import ContactItem, { ContactItemLoading } from "../moleculs/ContactItem";
import { useAppSelector, useAppStore } from "@/libstore/hooks";
import { SET_CONTACT_LIST } from "@/store/contactlist/contactlist.slice";

const ContactList: FC = () => {
  const store = useAppStore();
  const { onDialing, onDialingSelectedContact } = useDial();
  const { data, error, isLoading } = useGetContactAllQuery("");
  const contactList = useAppSelector((state) => state.contactList.data);
  const handleCalling = () => {
    onDialing();
  };

  const handleItemClick = (item: IContactItem) => {
    onDialingSelectedContact(item);
  };

  useEffect(() => {
    if (!isLoading) {
      const firstItem: any = data?.data[0];
      onDialingSelectedContact(firstItem);
      store.dispatch(SET_CONTACT_LIST(data?.data));
    }
  }, [isLoading]);

  return (
    <main className="px-3 lg:px-5">
      <div>
        <Label text="Contact Lists" />
      </div>
      <div className="h-[700px] overflow-auto">
        {!isLoading ? (
          <>
            {contactList.map((item: IContactItem) => {
              return (
                <div key={item.id} className="mt-3">
                  <ContactItem
                    firstName={item.firstName ?? ""}
                    lastName={item.lastName ?? ""}
                    phone="081222627367"
                    onCalling={handleCalling}
                    onClick={() => {
                      handleItemClick(item);
                    }}
                  />
                </div>
              );
            })}
          </>
        ) : (
          new Array(9).fill("").map(() => {
            return <ContactItemLoading />;
          })
        )}
      </div>
    </main>
  );
};

export default ContactList;
