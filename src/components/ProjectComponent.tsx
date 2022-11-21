import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import CounterAnalytics from "./common/CounterAnalytics";
import { Parallax } from "react-parallax";

const ProjectComponent: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen w-screen bg-primary pt-[25vh]">
      <div className="m-auto max-w-4xl">
        <h1 className="text-7xl font-bold text-secondary underline -sm:text-5xl">
          Projects:
        </h1>
        <div className="pt-24">
          <h2 className="text-5xl font-bold italic text-secondary -sm:text-3xl">
            Spinning Donut
          </h2>
          {/* parallax image */}
          <div className="mt-12 h-[40vh] w-[40vw] -sm:h-48 -sm:w-48">
            <Link
              href="https://www.youtube.com/watch?v=D26bLJ9ut88"
              target="_blank"
              className="pt-4"
            >
              <Parallax
                bgImage="/images/donut.webp"
                bgImageAlt="thumbnail for donut"
                strength={100}
                style={{
                  borderRadius: "10px",
                  width: "40vw",
                  height: "40vh",
                  zIndex: 1,
                }}
              />
            </Link>
          </div>

          <CounterAnalytics />
        </div>
      </div>
    </div>
  );
};
export default ProjectComponent;
