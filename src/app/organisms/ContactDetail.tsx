"use client";
import React, { FC } from "react";
import AvatarMedium from "../components/AvatarMedium";
import Label from "../components/Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import {
  faEnvelope,
  faMessage,
  faPhone,
  faPhoneVolume,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useDial } from "../hooks/useDial";
import { useAppSelector } from "../lib/hooks";
import { IContactItem } from "../d.type";

interface IContactDetail {
  onDailing: boolean;
}

const ContactDetail: FC<IContactDetail> = ({ onDailing }) => {
  const { endDialing, onDialingSelectedContact } = useDial();
  return (
    <div>
      <div className="flex justify-center w-full">
        <AvatarMedium />
      </div>
      <div className="flex justify-center w-full mt-2">
        <Label text="Rian Gho" />
      </div>
      <div className="flex justify-center w-full">
        <span className="font-mainRegular">08219329392</span>
      </div>
      {!onDailing ? (
        <div className="flex justify-center w-full mt-3">
          <button onClick={onDialingSelectedContact}>
            <div className="p-3 ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faPhone}
              />
            </div>
          </button>
          <button onClick={() => {}}>
            <div className="p-3 ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faMessage}
              />
            </div>
          </button>
          <button onClick={() => {}}>
            <div className="p-3 ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faEnvelope}
              />
            </div>
          </button>
        </div>
      ) : (
        <main>
          <div className="flex justify-center w-full mt-1">
            <TypeAnimation
              sequence={[". . . .", 1000, ".  . . .", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              cursor={false}
              className="text-primary"
            />
          </div>

          <div className="flex justify-center w-full mt-3">
            <button onClick={endDialing}>
              <div className="p-3 ms-3 w-[40px] h-[40px] bg-red-500 rounded-full justify-center content-center item-center hover:bg-amber-600">
                <FontAwesomeIcon
                  size="sm"
                  className="text-white"
                  icon={faPhone}
                />
              </div>
            </button>
          </div>
        </main>
      )}
    </div>
  );
};

export default ContactDetail;
