import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

export default function Input({ title, className, ...props }: InputProps) {
  return (
    <div
      className={"flex flex-col gap-1 w-full border-b-2 border-neutral-400 "}
    >
      {title && <label className="text-xl text-neutral-400">{title}</label>}
      <input
        className={" px-4 py-3 bg-neutral-600 w-full" + className}
        {...props}
      />
    </div>
  );
}
