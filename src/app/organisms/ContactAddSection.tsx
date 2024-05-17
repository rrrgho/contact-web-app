import { Card, CardContent } from "@/components/ui/card";
import { faImage, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import ButtonLight from "../components/ButtonLight";
import Image from "next/image";

const ContactAddSection: FC = () => {
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div
      className="w-full h-screen z-40 fixed justify-center content-center item-center top-0"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/5 p-5">
          <Card>
            <CardContent className="p-10">
              <Label text="Add contact" /> <br />
              <span className="font-mainLight">
                Phone number you added will be automatically synced to the
                i-cloud, you can change it anytime at settings !
              </span>
            </CardContent>
            <CardContent className="md:py-5">
              <div className="md:flex">
                <div className="w-full py-5 md:py-0  md:w-2/6 flex justify-center content-center item-center">
                  <label htmlFor="avatar-upload">
                    <div className="rounded-full cursor-pointer hover:bg-amber-100 w-[150px] h-[150px] bg-amber-200 overflow-hidden content-center text-center justify-center">
                      <input
                        type="file"
                        name="avatar"
                        id="avatar-upload"
                        className="hidden"
                        onChange={handleChange}
                      />
                      {file ? (
                        <Image
                          alt="avatar preview"
                          width={150}
                          height={150}
                          src={file}
                        />
                      ) : (
                        <FontAwesomeIcon icon={faImage} size="3x" />
                      )}
                    </div>
                  </label>
                </div>
                <div className="w-full md:w-4/6">
                  <div className="w-full md:flex">
                    <div className="w-full md:w-1/2 p-2">
                      <TextInput
                        icon={faUser}
                        placeholder="First name"
                        onChange={(e: any) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-2 pl-9 md:pl-2">
                      <TextInput
                        placeholder="Last name"
                        onChange={(e: any) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-full p-2">
                      <TextInput
                        icon={faPhone}
                        placeholder="Phone number"
                        onChange={(e: any) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-end p-2">
                    <div className="ms-2">
                      <ButtonLight title="Cancel" />
                    </div>
                    <div className="ms-2">
                      <ButtonPrimary title="Save" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactAddSection;
