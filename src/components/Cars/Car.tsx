import React, { memo } from "react";
import fallbackImg from "../../assets/images/basic.png";

interface CarPropsI {
  name: string;
  amount: number;
  img?: string;
}

const Car = ({ name, amount, img }: CarPropsI) => {
  return (
    <div className="car-card">
      <img
        src={img?.endsWith(".png") || img?.endsWith(".jpg") ? img : fallbackImg}
        alt="Car"
        onError={(e) => {
          // If there is an image but somehow can't be displayed
          (e.target as HTMLImageElement).src = fallbackImg;
        }}
      />
      <h1>{name}</h1>
      <p>{amount}</p>
    </div>
  );
};

export default memo(Car);
