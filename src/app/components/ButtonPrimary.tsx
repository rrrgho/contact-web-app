import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface IButtonPrimary {
  title: string;
  onClick?: () => void;
}

const ButtonPrimary: FC<IButtonPrimary> = ({ title, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span className="font-mainRegular text-white">{title}</span>
    </Button>
  );
};

export default ButtonPrimary;
