import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round:
    "rounded-bl-[16px] rounded-br-[16px] rounded-tl-none rounded-tr-[16px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    teal_600: "bg-teal-600 text-white-A700",
    white_A700_4c: "bg-white-A700_4c text-white-A700",
    red_50_01: "bg-red-50_01",
    teal_50: "bg-teal-50 text-teal-500",
    gray_100_01: "bg-gray-100_01 text-deep_orange-A100",
    white_A700: "bg-white-A700",
    blue_gray_50: "bg-blue_gray-50 text-teal-500",
    teal_500: "bg-teal-500 text-white-A700",
    teal_500_19: "bg-teal-500_19",
  },
  outline: { teal_500: "border border-solid border-teal-500 text-teal-500" },
};
const sizes = { xs: "p-[7px]", sm: "p-3", md: "p-[15px]", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "teal_600",
    "white_A700_4c",
    "red_50_01",
    "teal_50",
    "gray_100_01",
    "white_A700",
    "blue_gray_50",
    "teal_500",
    "teal_500_19",
  ]),
};

export { Button };
