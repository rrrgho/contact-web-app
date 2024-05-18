import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import ContactDetail from "./ContactDetail";

const DialingSection = () => {
  return (
    <div
      className="w-full h-screen z-50 fixed top-0"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div className="w-full flex justify-end">
        <div className="w-full lg:w-1/5 p-5">
          <Card>
            <CardContent className="py-10">
              <ContactDetail triggerEdit={() => {}} onDailing={true} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DialingSection;
