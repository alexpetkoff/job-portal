"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

interface GeneralSubmitButtonProps {
  text: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  width?: string;
  icon?: React.ReactNode;
}

export function GeneralSubmitButton({
  text,
  variant,
  width,
  icon,
}: GeneralSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      className={width + " cursor-pointer"}
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader className="size-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          <span className="flex gap-2 items-center">
            {text}
            {icon}
          </span>
        </>
      )}
    </Button>
  );
}
