import Link from "next/link";
import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button
      title={text}
      className="m-auto mb-8 rounded-xl bg-button py-4 px-8 text-center text-3xl text-white transition-all hover:bg-buttonHover  -sm:text-2xl "
    >
      {text}
    </button>
  );
};

export default Button;
