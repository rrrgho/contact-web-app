"use client";
import React, { FC } from "react";
import AvatarList from "../app/components/AvatarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

interface IContactItem {
  onCalling: () => void;
  onClick: () => void;
  firstName: string;
  lastName: string;
  phone: string;
}

const ContactItem: FC<IContactItem> = ({
  onCalling,
  onClick,
  firstName,
  lastName,
}) => {
  return (
    <div
      className="contact-item-wrapper mt-2 flex cursor-pointer content-center item-center justify-between hover:bg-amber-100 p-2 rounded-lg"
      onClick={onClick}
    >
      <div className="flex flex-row">
        <AvatarList />
        <div className="ms-4 flex flex-col">
          <span className="font-mainRegular">{firstName + " " + lastName}</span>
          <span className="font-mainLight">+6281376173959</span>
        </div>
      </div>
      <div className="justify-center content-center item-center">
        <button onClick={onCalling}>
          <div className="p-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
            <FontAwesomeIcon size="sm" className="text-white" icon={faPhone} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
