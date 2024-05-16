import React from "react";
import { Input } from "@/components/ui/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div className="bg-white w-full md:w-[400px] px-8 py-2 rounded-full">
      <div className="flex flex-row justify-between">
        <Input
          placeholder="Search ..."
          className="border-0 font-mainRegular bg-transparent focus-visible:ring-transparent text-primary outline-0"
        />
        <div className="justify-center content-center item-center">
          <FontAwesomeIcon
            icon={faSearch}
            fixedWidth
            className="text-2xl text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
