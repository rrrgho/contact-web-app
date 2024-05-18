"use client";
import React, { FC, useState } from "react";
import AvatarList from "../app-components/AvatarList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import ContactDetail from "@/organisms/ContactDetail";
import { Card, CardContent } from "@/components/ui/card";

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
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const handleSelect = () => {
    onClick();
    setShowDetail(!!!showDetail);
  };

  return (
    <div>
      <div
        className="contact-item-wrapper mt-2 flex cursor-pointer content-center item-center justify-between hover:bg-amber-100 p-2 rounded-lg"
        onClick={handleSelect}
      >
        <div className="flex flex-row">
          <AvatarList />
          <div className="ms-4 flex flex-col">
            <span className="font-mainRegular">
              {firstName + " " + lastName}
            </span>
            <span className="font-mainLight">+6281376173959</span>
          </div>
        </div>
        <div className="justify-center content-center item-center">
          <button onClick={onCalling}>
            <div className="w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faPhone}
              />
            </div>
          </button>
        </div>
      </div>
      {showDetail && (
        <div className="show md:hidden">
          <Card>
            <CardContent className="py-5">
              <ContactDetail onDailing={false} triggerEdit={() => {}} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ContactItem;

export const ContactItemLoading = () => {
  return (
    <div className="contact-item-wrapper mt-2 flex cursor-pointer content-center item-center justify-between p-2 rounded-lg">
      <div className="flex flex-row">
        <div className="rounded-full overflow-hidden justify-center content-center item-center flex bg-[#EBEBEB]">
          <Skeleton width={50} height={45} className="hidden" />
        </div>
        <div className="ms-4 flex flex-col">
          <Skeleton height={20} width={200} />
          <Skeleton height={10} width={100} />
        </div>
      </div>
      <div className="justify-center content-center item-center">
        <button>
          <div className="w-[40px] h-[40px] bg-[#EBEBEB] rounded-full justify-center content-center item-center">
            <FontAwesomeIcon size="sm" className="text-white" icon={faPhone} />
          </div>
        </button>
      </div>
    </div>
  );
};
