"use client";
import React, { FC } from "react";
import AvatarList from "../components/AvatarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactItem: FC = () => {
  return (
    <div className="contact-item-wrapper mt-2 flex cursor-pointer content-center item-center justify-between hover:bg-amber-100 p-2 rounded-lg">
      <div className="flex flex-row">
        <AvatarList />
        <div className="ms-4 flex flex-col">
          <span className="font-mainRegular">Rian Iregho</span>
          <span className="font-mainLight">+6281376173959</span>
        </div>
      </div>
      <div className="justify-center content-center item-center">
        <button
          onClick={() => {
            alert("clicked");
          }}
        >
          <div className="p-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
            <FontAwesomeIcon size="sm" className="text-white" icon={faPhone} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
