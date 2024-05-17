import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface IButtonLight {
  title: string;
  onClick?: () => void;
}

const ButtonLight: FC<IButtonLight> = ({ title, onClick }) => {
  return (
    <Button onClick={onClick} className="border-2 border-primary bg-white">
      <span className="font-mainRegular text-primary">{title}</span>
    </Button>
  );
};

export default ButtonLight;
