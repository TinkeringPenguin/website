import React from "react";
import CountUp from "react-countup";

interface Props {
  scrolled: boolean;
  number: number;
  classNames?: string;
  snippet?: string;
}

const Increaser: React.FC<Props> = ({
  scrolled,
  number,
  snippet = "",
  classNames = "",
}) => {
  return (
    <span className={classNames}>
      <CountUp end={scrolled ? number : 0} className="inline" />
      {snippet}
    </span>
  );
};
export default Increaser;
