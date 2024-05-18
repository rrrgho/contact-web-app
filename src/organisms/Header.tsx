import React, { FC } from "react";
import SearchInput from "../app-components/SearchInput";

const Header: FC = () => {
  return (
    <div className="flex bg-transparent flex-row justify-end">
      <SearchInput />
    </div>
  );
};

export default Header;
