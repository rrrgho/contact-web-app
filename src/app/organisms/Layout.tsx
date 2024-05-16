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
          <div className="w-3/5 bg-white rounded-lg me-0 md:me-5">
            {children}
          </div>
          <div className="w-2/5 bg-white">
            <span>rian gho</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
