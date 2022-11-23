import Link from "next/link";
import CounterAnalytics from "./common/CounterAnalytics";
import { Parallax } from "react-parallax";
import { MdWeb } from "react-icons/md";
import { FaGamepad, FaGithub } from "react-icons/fa";

interface SingleProjectProps {
  title: string;
  link: string;
  img: string;
  description?: React.ReactNode;
  strength?: number;
  github?: string;
  demo?: string;
  isGame?: boolean;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  title,
  link,
  img,
  description,
  strength = 100,
  github,
  demo,
  isGame,
}) => {
  return (
    <div className="pt-12">
      <h2 className="text-5xl font-bold italic text-secondary -sm:text-3xl">
        {title}
      </h2>
      <div className="mt-12 h-[40vh] w-[40vw] -xl:h-[20vh] -sm:h-[15vh] -sm:w-[80vw]">
        <Link href={link} target="_blank" className="pt-4">
          <Parallax
            bgImage={img}
            bgImageAlt={`${title} thumbnail`}
            strength={strength}
            className="z-[1] h-[40vh] w-[40vw] rounded-xl -xl:h-[20vh] -sm:h-[15vh] -sm:w-[80vw]"
          />
        </Link>
      </div>
      {description && (
        <p className="my-4 text-3xl text-secondary/80 -sm:text-2xl">
          {description}
        </p>
      )}
      {github && (
        <div>
          <Link
            href={github}
            target="_blank"
            className="text-4xl text-accentDark transition-all hover:text-buttonHover hover:underline -sm:text-2xl"
          >
            {/* github fa icon */}
            <FaGithub className="m-4 inline" size={48} />
            Source Code
          </Link>
        </div>
      )}
      {demo && (
        <div>
          <Link
            href={demo}
            target="_blank"
            className="text-4xl text-accentDark transition-all hover:text-buttonHover hover:underline -sm:text-2xl"
          >
            {/* github fa icon */}
            {isGame ? (
              <FaGamepad className="m-4 inline" size={48} />
            ) : (
              <MdWeb className="m-4 inline" size={48} />
            )}
            Demo
          </Link>
        </div>
      )}
    </div>
  );
};

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
          {/* TODO: Conspire coming soon */}
          {/* <SingleProject
            title="Conspire.ai"
            link="https://conspire.ai/"
            alt="Conspire.ai"
            img="/images/conspire.png"
            strength={200}
          /> */}
          <SingleProject
            title="Spinning Donut"
            link="https://www.youtube.com/watch?v=D26bLJ9ut88"
            img="/images/projects/donut.webp"
            description="Spinning ASCII Donut in Python🍩"
          />

          <CounterAnalytics />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
