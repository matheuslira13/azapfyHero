import Image from "next/image";
import { TypeCard } from "./_types";
import { Typography } from "../Typography";

export const Card = ({ name, url, onClick }: TypeCard) => {
  return (
    <div
      onClick={onClick}
      className="rounded-full flex justify-center items-end border-orange-500 border-2 mb-10"
      style={{
        minWidth: 200,
        height: 200,
        background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0) 100%
          ),url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="text-slate-50 mb-6 font-hero">{name}</p>
    </div>
  );
};
