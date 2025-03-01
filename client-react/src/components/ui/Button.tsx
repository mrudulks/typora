"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-text text-primary-light px-4 py-2 rounded-md ${
        props.outline ? "border border-text" : ""
      } ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
