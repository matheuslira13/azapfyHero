import { TypographyProps } from "./_types";

export const Typography = ({
  children,
  type,
  color = "white",
  bold,
  orientation = "inherit",
}: TypographyProps) => {
  let fontSize = {
    "48": { style: "48px" },
    "40": { style: "40px" },
    "32": { style: "32px" },
    "28": { style: "28px" },
    "24": { style: "24px" },
    "20": { style: "20px" },
    "16": { style: "16px" },
    "12": { style: "12px" },
    "8": { style: "8px" },
  }[type];
  let selectColor = {
    orange: { style: "text-orange-500" },
    blue: { style: "text-blue-500" },
    yellow: { style: "text-yellow-500" },
    green: { style: "text-green-500" },
    red: { style: "text-red-500" },
    black: { style: "text-black-500" },
    white: { style: "text-slate-50" },
  }[color];

  return (
    <p
      className={`${selectColor.style} font-hero`}
      style={{
        fontSize: `${fontSize.style}`,
        fontWeight: `${bold}`,
        textAlign: `${orientation}`,
      }}
    >
      {children}
    </p>
  );
};
