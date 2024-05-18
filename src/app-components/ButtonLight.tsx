import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface IButtonLight {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const ButtonLight: FC<IButtonLight> = ({ title, onClick, type }) => {
  return (
    <Button
      type={type ?? "button"}
      onClick={onClick}
      className="border-2 border-primary bg-white"
    >
      <span className="font-mainRegular text-primary">{title}</span>
    </Button>
  );
};

export default ButtonLight;
