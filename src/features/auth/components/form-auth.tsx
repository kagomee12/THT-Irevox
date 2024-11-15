import React from "react";
import { Link } from "react-router-dom";

const FormAuth = ({
  children,
  buttonText,
  verifyText1,
  verifyText2,
  goTopage,
  action,
}: {
  children: React.ReactNode;
  buttonText: string;
  verifyText1: string;
  goTopage: string;
  verifyText2: string;
  action: () => void;
}) => {
  return (
    <div className="gap-y-3 flex flex-col">
      <form
        className="w-full flex flex-col gap-y-4"
        onSubmit={action}
      >
        {children}
        <button
          className="h-12 bg-secondary text-white hover:opacity-50 active:opacity-100"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      <p>
        {verifyText1}{" "}
        <Link to={goTopage} className="text-secondary">
          {verifyText2}
        </Link>
      </p>
    </div>
  );
};

export default FormAuth;
