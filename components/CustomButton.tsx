"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyle,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <p className={`flex-1 ${textStyle}`}>{title}</p>
      {
        rightIcon && (
          <div className="relative w-6 h-6 ">

            <Image src={rightIcon} fill alt="right icon" className="object-contain" />
          </div>
        )
      }
    </button>
  );
};

export default CustomButton;
