import ButtonPrimary from "@/app-components/ButtonPrimary";
import { Card, CardContent } from "@/components/ui/card";
import React, { FC } from "react";

interface IInfoSection {
  children: React.ReactNode;
  onContinue: () => void;
}

const InfoSection: FC<IInfoSection> = ({ children, onContinue }) => {
  return (
    <div
      className="w-full h-screen z-50 fixed top-0 left-0"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div className="w-full flex justify-center content-center item-center">
        <div className="w-full lg:w-3/5 p-5">
          <Card>
            <CardContent className="py-10">{children}</CardContent>
            <div className="w-full flex p-3 justify-end">
              <ButtonPrimary title="Continue" onClick={onContinue} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
