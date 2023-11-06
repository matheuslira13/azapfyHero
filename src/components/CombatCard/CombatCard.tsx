"use client";
import Image from "next/image";
import { Typography } from "..";
import { CombatCardProps } from "./_types";
import { ReactNode } from "react";

interface Title {
  children: ReactNode;
}

export const CombatCard = ({
  img,
  name,
  combat,
  durability,
  intelligence,
  power,
  race,
  speed,
  strength,
}: CombatCardProps) => {
  const infoStats = [
    {
      atri: "Combate",
      info: combat,
    },
    {
      atri: "Força",
      info: strength,
    },
    {
      atri: "Resistencia",
      info: durability,
    },
    {
      atri: "Inteligencia",
      info: intelligence,
    },
    {
      atri: "Poder",
      info: power,
    },
    {
      atri: "Velocidade",
      info: speed,
    },
  ];
  return (
    <div
      style={{
        width: 300,
        height: 400,
        borderColor: "2b2b2b",
        borderWidth: 2,
        borderStyle: "solid",
        background: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5) 1%,
        rgba(0, 0, 0, 0) 100%
      ),linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 1%,
        rgba(0, 0, 0, 0) 100%
      ),url(./bg.jpg)`,
        borderRadius: 4,
      }}
      className="bg-orange-500 flex  flex-col"
    >
      <Title>
        <Typography color="black" type="16">
          {name}
        </Typography>
      </Title>
      <div className="px-4">
        <div className="border-2 w-full border-red-950">
          <img
            src={img}
            alt="image hero"
            className="w-full h-40  object-top opacity-90"
          />
        </div>
      </div>
      <Title>
        <Typography color="black" type="16">
          {race}
        </Typography>
      </Title>
      <div className="px-4">
        <Title>
          {infoStats.map((item: any, index: any) => {
            return (
              <div className="flex" key={index}>
                <div className="flex-1">
                  <Typography
                    type="16"
                    color="black"
                    bold="bolder"
                    orientation="left"
                  >
                    {item.atri}
                  </Typography>
                </div>
                <div className="flex-1">
                  <Typography type="16" color="black" orientation="center">
                    {item.info}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Title>
      </div>
    </div>
  );
};

const Title = ({ children }: Title) => {
  return (
    <div className=" mx-1  border-amber-950 border-2">
      <div
        style={{
          backgroundColor: "rgba(243,198,180,0.6)",
        }}
        className="border-black border-2 pl-2"
      >
        {children}
      </div>
    </div>
  );
};
