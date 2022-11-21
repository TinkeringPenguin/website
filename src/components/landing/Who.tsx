import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import Increaser from "../common/Increaser";

// TODO: we could pull from an API or from a JSON data file
// which is generated from a cron job every week using GitHub Actions
const VIEWS = 243;
const STARS = 400;

const Who: React.FC = () => {
  const [scrolledCount, setScrolledCount] = useState(false);
  const [scrolledAbout, setScrolledAbout] = useState(false);
  const counterIntersectionRef = useRef(null);
  const aboutIntersectionRef = useRef(null);
  const counterIntersection = useIntersection(counterIntersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  const aboutIntersection = useIntersection(aboutIntersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (
    counterIntersection &&
    counterIntersection.intersectionRatio > 0.75 &&
    !scrolledCount
  )
    setScrolledCount(true);
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
      className="flex min-h-screen w-screen flex-row items-center bg-secondary py-[15vh] pl-[30vw] pr-[20vw]"
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
        <ul className="list-disc pl-12 pt-24">
          <li
            className="text-5xl leading-[4rem] text-primary -sm:text-3xl"
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
              <FaExternalLinkAlt
                className="ml-2 inline-block text-accent"
                size={32}
              />
            </Link>
          </li>
          <li className="mt-4 text-5xl leading-[4rem] text-primary -sm:text-3xl">
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
        <div className="pt-24">
          <p className="text-5xl text-primary -sm:text-3xl">
            You might also know me from the donut video🍩
            <Link
              href="https://www.youtube.com/watch?v=D26bLJ9ut88"
              title="Spinning ASCII Donut"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              <FaExternalLinkAlt
                className="ml-2 inline-block text-accent"
                size={32}
              />
            </Link>
          </p>

          {/* video analystics block */}
          <div className="flex -md:flex-col" ref={counterIntersectionRef}>
            <div className="flex flex-col items-center justify-center p-12 -md:pl-0">
              <Increaser
                number={VIEWS}
                snippet="k+"
                scrolled={scrolledCount}
                classNames="text-6xl font-bold increaserGrad1"
              />
              {/* tailwind style equvilent to background: linear-gradient(180deg, #F96614 0%, #F9C614 100%); */}
              <p className="p-4 text-3xl font-bold">
                👁️ <span className="goldGradient1">Views</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-12 -md:pl-0">
              <Increaser
                number={STARS}
                snippet="+"
                scrolled={scrolledCount}
                classNames="text-6xl font-bold increaserGrad1"
              />
              {/* tailwind style equvilent to background: linear-gradient(180deg, #F96614 0%, #F9C614 100%); */}
              <p className="p-4 text-3xl font-bold">
                🌟 <span className="goldGradient1">Stars</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Who;
