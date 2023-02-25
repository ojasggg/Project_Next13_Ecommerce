import Image from "next/image";
import React from "react";
import Img1 from "../../public/images/headphone.png";

interface PropType {
  index: number;
}

const ProductCard = ({ index }: PropType) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center py-4 transition-all ease-in hover:scale-105"
      key={index}
    >
      <Image src={Img1} alt="Headphone" className="w-[60%]" />

      <div className="mt-2">
        <p className="text-center font-medium">
          $99.95{" "}
          <span className="text-sm font-normal text-gray-500">$199.95</span>
        </p>
        <p className="mt-2 px-4 text-center text-[12px] xl:text-sm">
          Bluetooth on-ear PureBass Headphone
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
