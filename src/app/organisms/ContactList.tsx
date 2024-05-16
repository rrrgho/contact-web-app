import React, { FC } from "react";
import Label from "../components/Label";
import ContactItem from "../moleculs/ContactItem";

const ContactList: FC = () => {
  return (
    <main className="px-3 md:px-5">
      <div>
        <Label text="Contact Lists" />
      </div>
      <div className="mt-3">
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </main>
  );
};

export default ContactList;
