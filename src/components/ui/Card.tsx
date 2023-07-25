import React, { ReactElement } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { IconProps } from "@mui/material";

export default function Card({
  children,
  className,
  title,
  icon,
}: {
  children?: React.ReactNode;
  className?: string;
  title: string;
  icon?: ReactElement<IconProps>;
}) {
  return (
    <div className={"bg-neutral-700 rounded-xl w-full p-4 " + className}>
      <label className="text-xl font-semibold text-neutral-200 flex flex-row justify-between">
        {title}
        {icon}
      </label>
      <div className="h-[1px] w-full bg-neutral-500 my-2" />
      {children}
    </div>
  );
}
