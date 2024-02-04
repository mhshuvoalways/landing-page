import React from "react";
import Image from "next/image";
import KbStar from "@/public/icons/kbstar.svg";

interface Props {
  title: string;
  des: string;
  icon?: HTMLImageElement;
}

const KbItem: React.FC<Props> = ({ title, des, icon }) => {
  return (
    <div className="border p-5 bg-[#FDF4E6] relative h-full">
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-6">
        <div>
          <p className="text-xl sm:text-2xl font-bold">{title}</p>
          <p className="mt-7">{des}</p>
        </div>
        {icon && <Image src={icon} alt="" className="" />}
        <Image src={KbStar} alt="" className="absolute bottom-3 right-5" />
      </div>
    </div>
  );
};

export default KbItem;
