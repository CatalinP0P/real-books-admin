import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  options: string[];
}

export default function Select({
  title,
  className,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="w-full border-neutral-400 border-b-2 flex flex-col gap-1">
      <label className="text-xl text-neutral-400">{title}</label>
      <select
        className={"px-4 py-3 bg-neutral-600 w-full" + className}
        {...props}
      >
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}
