import { Button, ButtonProps } from "@/components/ui/button";
import React, { FC, RefAttributes } from "react";

interface IButtonPrimary {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonPrimary: FC<IButtonPrimary> = ({
  title,
  onClick,
  type,
  disabled,
}) => {
  return (
    <Button onClick={onClick} type={type ?? "button"} disabled={disabled}>
      <span className="font-mainRegular text-white">{title}</span>
    </Button>
  );
};

export default ButtonPrimary;
