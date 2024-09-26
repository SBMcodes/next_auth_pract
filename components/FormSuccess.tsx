import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }
  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 text-sm bg-emerald-500/15 text-emerald-500">
      <CheckCircledIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
