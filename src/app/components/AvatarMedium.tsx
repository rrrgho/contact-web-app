import Image from "next/image";
import React, { FC } from "react";

const AvatarMedium: FC = () => {
  return (
    <div className="rounded-full w-[100px] h-[100px] bg-amber-300">
      <Image
        src={`https://avatar.iran.liara.run/public/?id=${Math.floor(
          Math.random() * 90 + 10
        )}`}
        width={100}
        height={100}
        alt="Avatar List Images"
      />
    </div>
  );
};

export default AvatarMedium;
