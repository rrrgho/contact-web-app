"use client";
import { FC } from "react";
import Label from "../app/components/Label";
import { useDial } from "../hooks/useDial";
import { useAppSelector } from "../libstore/hooks";
import ContactItem from "../moleculs/ContactItem";
import { useGetContactAllQuery } from "@/store/contact/contact.api";
import { IContactItem } from "@/d.type";

const ContactList: FC = () => {
  const { onDialing, onDialingSelectedContact } = useDial();
  const { data, error, isLoading } = useGetContactAllQuery("");
  const handleCalling = () => {
    const payload = {
      status: true,
      firstName: "rian",
      lastName: "iregho",
      age: "24",
      photo: "r",
      phone: "0912121212",
    };
    onDialing();
    onDialingSelectedContact(payload);
  };

  const handleItemClick = (item: IContactItem) => {
    onDialingSelectedContact(item);
  };

  return (
    <main className="px-3 md:px-5">
      <button
        onClick={() => {
          console.log(data?.data);
        }}
      >
        sasa
      </button>
      <div>
        <Label text="Contact Lists" />
      </div>
      {!isLoading ? (
        <>
          {data?.data.map((item: IContactItem) => {
            return (
              <div className="mt-3">
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
        <span>Loading ...</span>
      )}
    </main>
  );
};

export default ContactList;
