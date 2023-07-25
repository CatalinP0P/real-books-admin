import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
}

export default function TextArea({
  title,
  className,
  ...props
}: TextAreaProps) {
  return (
    <div
      className={"flex flex-col gap-1 w-full border-b-2 border-neutral-400 "}
    >
      <label className="text-xl text-neutral-400">{title}</label>
      <textarea
        className={" px-4 py-3 bg-neutral-600 w-full min-h-[5rem] " + className}
        {...props}
      />
    </div>
  );
}
