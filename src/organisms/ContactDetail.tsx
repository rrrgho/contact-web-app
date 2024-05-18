"use client";
import {
  faEnvelope,
  faMessage,
  faPencilAlt,
  faPhone,
  faTrash,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AvatarMedium from "../app-components/AvatarMedium";
import Label from "../app-components/Label";
import { useDial } from "../hooks/useDial";
import { useAppSelector } from "../libstore/hooks";
import { useContactApi } from "@/hooks/useContactApi";
import InfoSection from "./InfoSection";

// Import image error evidence
import DeleteErrorEvidence from "@/assets/images/delete-error.png";
import ReduxDeleteEvidence from "@/assets/images/redux-delete-evidence.png";
import Image from "next/image";

interface IContactDetail {
  onDailing: boolean;
  triggerEdit: () => void;
}

const ContactDetail: FC<IContactDetail> = ({ onDailing, triggerEdit }) => {
  const { onDialing, endDialing } = useDial();
  const { handleDeleteContact } = useContactApi();
  const [showDeleteInfo, setShowDeleteInfo] = useState(false);
  const contactSelected = useAppSelector((state) => state.dialing);
  return (
    <div className="bg-white rounded-3xl bg-white lg:py-10">
      {/* Section Info Delete Error */}
      {showDeleteInfo && (
        <InfoSection
          onContinue={() => {
            handleDeleteContact(contactSelected, () => {
              setShowDeleteInfo(false);
            });
          }}
        >
          <div className="w-full flex">
            <div className="w-1/6 justify-center content-center item-center flex">
              <FontAwesomeIcon
                icon={faWarning}
                size="4x"
                className="text-primary"
              />
            </div>
            <div className="w-5/6 h-[600px] overflow-auto">
              <div className="w-full rounded-lg bg-amber-100 p-3">
                <Label text="Delete may not affecting the database !" /> <br />
                <span>
                  The API Provided https://contact.herokuapp.com/contact with
                  method DELETE doesn't work properly, it returns 400 in anyway.
                  I'll show you the evidence below
                </span>
              </div>
              <div className="w-full p-3">
                <Label text="Swagger Test Delete Error ( 400 ) API" /> <br />
                <Image src={DeleteErrorEvidence} alt="Delete Error Evidence" />
              </div>
              <div className="w-full p-3">
                <Label text="Solution" /> <br />
                <span>
                  You can still success deleted localy, I delete the data from
                  Contact List Reducer <br />
                  But, when we reload the page, the data will not be changed.
                </span>
              </div>
              <div className="w-full p-3">
                <Label text="Postman Test Edit Error ( 400 ) API" /> <br />
                <Image src={ReduxDeleteEvidence} alt="Edit Error Evidence" />
              </div>
            </div>
          </div>
        </InfoSection>
      )}
      <div className="flex justify-center w-full">
        <AvatarMedium />
      </div>
      <div className="flex justify-center w-full mt-2">
        <Label
          text={contactSelected.firstName + " " + contactSelected.lastName}
        />
      </div>
      <div className="flex justify-center w-full">
        <span className="font-mainRegular">{contactSelected.phone}</span>
      </div>
      {!onDailing ? (
        <div className="flex justify-center w-full mt-3">
          <button onClick={onDialing}>
            <div className="ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faPhone}
              />
            </div>
          </button>
          <button onClick={triggerEdit}>
            <div className="ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faPencilAlt}
              />
            </div>
          </button>
          <button
            onClick={() => {
              setShowDeleteInfo(true);
            }}
          >
            <div className="ms-3 w-[40px] h-[40px] bg-primary rounded-full justify-center content-center item-center hover:bg-amber-600">
              <FontAwesomeIcon
                size="sm"
                className="text-white"
                icon={faTrash}
              />
            </div>
          </button>
        </div>
      ) : (
        <main>
          <div className="flex justify-center w-full mt-1">
            <span className="font-mainLight">Calling</span>
          </div>
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
              <div className="md:ms-3 w-[40px] h-[40px] bg-red-500 rounded-full justify-center content-center item-center hover:bg-amber-600">
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
