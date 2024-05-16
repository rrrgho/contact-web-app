"use client";
import React, { FC } from "react";
import Header from "./Header";
import ContactDetail from "./ContactDetail";
import DialingSection from "./DialingSection";
import { useAppSelector } from "../lib/hooks";

interface ILayout {
  children: React.ReactNode;
}

const MainLayout: FC<ILayout> = ({ children }) => {
  const dialing = useAppSelector((state) => state.DialingReducer);
  return (
    <main>
      <div className="container bg-transparent px-5 py-5 md:px-[200px] md:py-10">
        <Header />
        <div className="flex mt-5">
          <div className="w-full md:w-3/5 bg-white rounded-3xl me-0 md:me-5">
            {children}
          </div>
          <div className="w-2/5 bg-white rounded-3xl bg-white hidden md:block md:py-10">
            <ContactDetail onDailing={false} />
          </div>
        </div>
      </div>
      {dialing.status && <DialingSection />}
    </main>
  );
};

export default MainLayout;
