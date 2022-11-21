import Link from "next/link";
import CounterAnalytics from "./common/CounterAnalytics";
import { Parallax } from "react-parallax";

const ProjectComponent: React.FC = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-screen bg-primary p-12 pt-[25vh]"
    >
      <div className="m-auto max-w-4xl">
        <h1 className="text-7xl font-bold text-secondary underline -sm:text-5xl">
          Projects:
        </h1>
        <div className="pt-24 -sm:pt-12">
          <div>
            <h2 className="text-5xl font-bold italic text-secondary -sm:text-3xl">
              Conspire.ai
            </h2>
            {/* parallax image */}
            <div className="mt-12 h-[40vh] w-[40vw] -sm:h-[15vh] -sm:w-[80vw]">
              <Link
                href="https://www.youtube.com/watch?v=D26bLJ9ut88"
                target="_blank"
                className="pt-4"
              >
                <Parallax
                  bgImage="/images/donut.webp"
                  bgImageAlt="thumbnail for donut"
                  strength={100}
                  className="z-[1] h-[40vh] w-[40vw] rounded-xl -sm:h-[15vh] -sm:w-[80vw]"
                />
              </Link>
            </div>
            <p className="mt-4 text-4xl text-secondary/80 -sm:text-2xl">
              Your digital AI art assistant that helps you create and augment
              your art
            </p>
          </div>
          <div className="pt-12">
            <h2 className="text-5xl font-bold italic text-secondary -sm:text-3xl">
              Spinning Donut
            </h2>
            <div className="mt-12 h-[40vh] w-[40vw] -sm:h-[15vh] -sm:w-[80vw]">
              <Link
                href="https://www.youtube.com/watch?v=D26bLJ9ut88"
                target="_blank"
                className="pt-4"
              >
                <Parallax
                  bgImage="/images/donut.webp"
                  bgImageAlt="thumbnail for donut"
                  strength={100}
                  className="z-[1] h-[40vh] w-[40vw] rounded-xl -sm:h-[15vh] -sm:w-[80vw]"
                />
              </Link>
            </div>
          </div>

          <CounterAnalytics />
        </div>
      </div>
    </div>
  );
};
export default ProjectComponent;
