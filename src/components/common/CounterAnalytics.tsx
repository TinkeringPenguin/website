import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import Increaser from "../common/Increaser";

// TODO: we could pull from an API or from a JSON data file
// which is generated from a cron job every week using GitHub Actions
const VIEWS = 243;
const STARS = 400;

const CounterAnalytics: React.FC = () => {
  const [scrolledCount, setScrolledCount] = useState(false);
  const counterIntersectionRef = useRef(null);
  const counterIntersection = useIntersection(counterIntersectionRef, {
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

  return (
    <div className="flex -md:flex-col" ref={counterIntersectionRef}>
      <div className="flex flex-col items-center justify-center p-12 -md:pl-0 -sm:items-start">
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
      <div className="flex flex-col items-center justify-center p-12 -md:pl-0 -sm:items-start -sm:py-0">
        <Increaser
          number={STARS}
          snippet="+"
          scrolled={scrolledCount}
          classNames="text-6xl font-bold increaserGrad2"
        />
        {/* tailwind style equvilent to background: linear-gradient(180deg, #F96614 0%, #F9C614 100%); */}
        <p className="p-4 text-3xl font-bold">
          🌟 <span className="goldGradient1">Stars</span>
        </p>
      </div>
    </div>
  );
};
export default CounterAnalytics;
