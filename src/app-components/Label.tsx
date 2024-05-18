import React, { FC } from "react";

interface ILabel {
  text: string;
}

const Label: FC<ILabel> = ({ text }) => {
  return <span className="font-mainBold text-lg tracking-wide">{text}</span>;
};

export default Label;
