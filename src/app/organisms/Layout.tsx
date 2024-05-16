import React, { FC } from "react";
import Header from "./Header";

interface ILayout {
  children: React.ReactNode;
}

const MainLayout: FC<ILayout> = ({ children }) => {
  return (
    <main>
      <div className="container bg-transparent px-5 py-5 md:px-[200px] md:py-10">
        <Header />
        <div className="flex mt-5">
          <div className="w-full md:w-3/5 bg-white rounded-3xl me-0 md:me-5">
            {children}
          </div>
          <div className="w-2/5 bg-white hidden md:block">
            <span>rian gho</span>
          </div>
        </div>
      </div>
      {/* <DialingSection /> */}
    </main>
  );
};

export default MainLayout;
