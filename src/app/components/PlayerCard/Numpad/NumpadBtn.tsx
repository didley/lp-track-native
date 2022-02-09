import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: "gray" | "orange" | "last";
  span?: 1 | 2 | 3;
  [x: string]: any;
};

export const NumpadBtn = ({ children, color = "gray", ...rest }: Props) => {
  const classes = {
    gray: "text-white bg-gray-500 w-20 h-20 rounded-full text-4xl",
    orange: "text-white bg-orange-400 w-20 h-20 rounded-full text-4xl",
    last: "text-white bg-orange-400 h-20 rounded-full text-4xl col-span-4 w-full",
  };

  return (
    <button className={classes[color]} {...rest}>
      {children}
    </button>
  );
};
