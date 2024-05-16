"use client";
import { FC } from "react";
import Label from "../components/Label";
import { useDial } from "../hooks/useDial";
import { useAppSelector } from "../lib/hooks";
import ContactItem from "../moleculs/ContactItem";

const ContactList: FC = () => {
  const { onDialing } = useDial();
  const handleCalling = () => {
    const payload = {
      status: true,
      name: "rian",
      phone: "0912121212",
    };
    onDialing(payload);
  };

  const handleItemClick = () => {
    alert("Item Clicked");
  };

  const dialing = useAppSelector((state) => state.DialingReducer);
  return (
    <main className="px-3 md:px-5">
      <div>
        <Label text="Contact Lists" />
      </div>
      <div className="mt-3">
        <ContactItem onCalling={handleCalling} onClick={handleItemClick} />
      </div>
    </main>
  );
};

export default ContactList;
