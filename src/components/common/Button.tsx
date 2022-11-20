import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link?: string;
}

interface InnerButtonProps {
  text: string;
  link?: string;
}

const ButtonInner: React.FC<InnerButtonProps> = ({ text }) => {
  return (
    <button className="m-auto mb-8 rounded-xl bg-button py-4 px-8 text-center text-3xl text-white transition-all hover:bg-buttonHover  -sm:text-2xl ">
      {text}
    </button>
  );
};

const Button: React.FC<Props> = ({ text, link }) => {
  if (link) {
    <Link href={link} title={text}>
      <ButtonInner text={text} />
    </Link>;
  }
  return <ButtonInner text={text} />;
};
export default Button;
