import Image from "next/image";
import { WinnerProps } from "./_types";
import { Typography } from "../Typography";

export const WinnerCharacter = ({ img, name }: WinnerProps) => {
  return (
    <div className="flex flex-col items-center	">
      <div className="flex items-center">
        <Typography type="20" bold="bolder" color="yellow" orientation="center">
          VENCEDOR
        </Typography>
        <Image alt="medal" src="/winner.svg" height={100} width={50} />
      </div>
      <Typography type="20" bold="bolder">
        {name}
      </Typography>
      <Image alt="hero" src={img} height={150} width={150} />
    </div>
  );
};
