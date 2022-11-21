import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import CounterAnalytics from "../common/CounterAnalytics";

const Who: React.FC = () => {
  const [scrolledAbout, setScrolledAbout] = useState(false);
  const aboutIntersectionRef = useRef(null);
  const aboutIntersection = useIntersection(aboutIntersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (
    aboutIntersection &&
    aboutIntersection.intersectionRatio > 0.75 &&
    !scrolledAbout
  )
    setScrolledAbout(true);

  return (
    // animate border bottom on load from left to right
    <div
      id="who"
      className="flex min-h-screen w-screen flex-row items-center bg-secondary py-[15vh] pl-[30vw] pr-[20vw] -sm:pr-2"
    >
      {/* once scrolled in bounce animate webp of wave.webm in */}
      <div
        className={`absolute top-[102%] right-0 h-64 w-64 ${
          scrolledAbout ? "bounceInRight" : "translate-x-[16rem]"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/wave.webm" type="video/webm" />
        </video>
      </div>
      <div className={scrolledAbout ? "fadeIn" : "opacity-0"}>
        <h3 className="text-7xl font-bold text-primary -sm:text-5xl">
          <span className="text-accent">Me</span>
          <wbr />
          .who()
        </h3>
        {/* list of employment */}
        <ul className="list-disc pl-12 pt-24 -sm:pt-12">
          <li
            className="text-5xl leading-[4rem] text-primary -sm:text-2xl"
            ref={aboutIntersectionRef}
          >
            <p>CEO & Founder</p>
            <Link
              href="https://antarcticsolutions.ca/"
              title="antarctic solutions website"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              @Antarctic Solutions
              {/* open link fa icon */}
              <FaExternalLinkAlt className="ml-2 inline-block h-8 w-8 text-accent -sm:h-4 -sm:w-4" />
            </Link>
          </li>
          <li className="mt-4 text-5xl leading-[4rem] text-primary -sm:text-2xl">
            <p>Formerly SWD</p>
            <Link
              href="https://www.intuit.com/"
              title="intuit website"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              @Intuit
            </Link>
          </li>
        </ul>
        <div className="pt-24 -sm:pt-12">
          <p className="text-5xl text-primary -sm:text-2xl">
            You might also know me from the donut video🍩
            <Link
              href="https://www.youtube.com/watch?v=D26bLJ9ut88"
              title="Spinning ASCII Donut"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              <FaExternalLinkAlt className="ml-2 inline-block h-8 w-8 text-accent -sm:ml-0 -sm:h-4  -sm:w-4" />
            </Link>
          </p>

          <CounterAnalytics />
        </div>
      </div>
    </div>
  );
};
export default Who;
