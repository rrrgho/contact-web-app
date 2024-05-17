import React, { FC } from "react";
import { Input } from "@/components/ui/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ITextinput {
  icon?: any;
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput: FC<ITextinput> = ({ icon, placeholder, onChange }) => {
  return (
    <div className="bg-white w-full">
      <div className="flex flex-row justify-between">
        {icon && (
          <div className="justify-center content-center item-center">
            <FontAwesomeIcon
              icon={icon}
              fixedWidth
              className="text-2xl text-primary"
            />
          </div>
        )}
        <Input
          placeholder={placeholder ?? "Placeholder ..."}
          className="border border-solid font-mainRegular bg-transparent text-primary ms-2 outline-primary"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
