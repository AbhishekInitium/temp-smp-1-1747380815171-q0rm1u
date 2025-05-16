
import React from "react";

interface InitiumLogoProps {
  className?: string;
}

const InitiumLogo: React.FC<InitiumLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="12" fill="#0A2647" />
      <path
        d="M18 18H42"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M30 18V42"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M21 30H39"
        stroke="#2C74B3"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 42H42"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 30.5H78M86 30.5H78M78 30.5V18.5M78 30.5V42.5"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M94 18.5H102V42.5H94"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 18.5H118V42.5H110"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M126 42.5V18.5H134V42.5"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M142 18.5V42.5M142 18.5H150M142 30.5H148M142 42.5H150"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M158 18.5H174V25.5H158V42.5"
        stroke="#0A2647"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InitiumLogo;
