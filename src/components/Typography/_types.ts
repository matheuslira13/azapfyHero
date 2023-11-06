import { ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  type: "48" | "40" | "32" | "28" | "24" | "20" | "16" | "12" | "8";
  color?: "orange" | "black" | "blue" | "yellow" | "red" | "green" | "white";
  bold?: "bold" | "bolder";
  orientation?: "center" | "left" | "right" | "inherit";
};
