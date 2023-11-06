import { TbTrashXFilled } from "react-icons/tb";
import { ButtonProps } from "./types";
import { Typography } from "../Typography";

export const Button = ({
  onClick,
  isDisabled = false,
  text,
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ opacity: isDisabled ? "0.1" : "1" }}
      className="bg-orange-400 rounded-xl border-none flex p-3 items-center pointer justify-center"
      onClick={onClick}
      disabled={isDisabled}
    >
      <Typography type="12" bold="bolder" color="black">
        {text}
      </Typography>
      {icon && <TbTrashXFilled className="text-lg font-black" />}
    </button>
  );
};
