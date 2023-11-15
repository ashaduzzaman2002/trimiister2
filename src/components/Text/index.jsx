import React from "react";

const sizeClasses = {
  txtOutfitMedium14: "font-medium font-outfit",
  txtOutfitMedium12: "font-medium font-outfit",
  txtOutfitMedium16Black900: "font-medium font-outfit",
  txtOutfitMedium18: "font-medium font-outfit",
  txtOutfitRegular16WhiteA700cc: "font-normal font-outfit",
  txtOutfitMedium16: "font-medium font-outfit",
  txtOutfitRegular24: "font-normal font-outfit",
  txtOutfitRegular20: "font-normal font-outfit",
  txtOutfitSemiBold24Gray90001: "font-outfit font-semibold",
  txtOutfitSemiBold24: "font-outfit font-semibold",
  txtOutfitSemiBold28: "font-outfit font-semibold",
  txtOutfitSemiBold20Gray900: "font-outfit font-semibold",
  txtOutfitLight16: "font-light font-outfit",
  txtOutfitSemiBold20: "font-outfit font-semibold",
  txtOutfitSemiBold42: "font-outfit font-semibold",
  txtOutfitMedium24Gray900: "font-medium font-outfit",
  txtOutfitMedium24: "font-medium font-outfit",
  txtOutfitRegular16: "font-normal font-outfit",
  txtOutfitMedium22: "font-medium font-outfit",
  txtOutfitRegular20Gray600: "font-normal font-outfit",
  txtOutfitRegular12: "font-normal font-outfit",
  txtOutfitRegular20Gray900: "font-normal font-outfit",
  txtOutfitMedium42: "font-medium font-outfit",
  txtOutfitMedium20: "font-medium font-outfit",
  txtOutfitRegular16Gray600: "font-normal font-outfit",
  txtOutfitSemiBold58: "font-outfit font-semibold",
  txtOutfitSemiBold16: "font-outfit font-semibold",
  txtOutfitSemiBold32WhiteA700: "font-outfit font-semibold",
  txtOutfitSemiBold18: "font-outfit font-semibold",
  txtOutfitBold20: "font-bold font-outfit",
  txtOutfitRegular18: "font-normal font-outfit",
  txtOutfitSemiBold32: "font-outfit font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
