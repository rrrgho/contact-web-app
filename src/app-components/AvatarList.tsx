import Image from "next/image";
import React, { FC } from "react";

const AvatarList: FC = () => {
  return (
    <div className="rounded-full">
      <Image
        src={`https://avatar.iran.liara.run/public/?id=${Math.floor(
          Math.random() * 90 + 10
        )}`}
        width={50}
        height={50}
        alt="Avatar List Images"
      />
    </div>
  );
};

export default AvatarList;
