import Link from "next/link";
import Button from "../common/Button";

const Hero: React.FC = () => {
  return (
    // animate border bottom on load from left to right
    <div
      id="hero"
      className="flex min-h-screen flex-row items-center justify-center bg-primary"
    >
      <div className="w-[22vw] xl:w-[10vw]"></div>
      <div className="fadeIn">
        <h1 className="text-7xl font-bold text-secondary -sm:text-5xl">
          Hey it{"'"}s Andrew,
        </h1>
        <h2 className="mb-12 mt-4 text-5xl text-secondary/80 -sm:text-3xl">
          the Tinkering Penguin <span className="wave">👋</span>
        </h2>
        <Link href={"/#contact"}>
          <Button text="Get in Touch" />
        </Link>
      </div>
      {/* absolution scroll down note */}
      <div className="absolute bottom-0 left-0 right-0 mb-8 flex flex-col items-center justify-center">
        <Link href="#who">
          <p className="text-xl italic text-secondary/60 hover:text-secondary/90 -sm:text-lg">
            It{"'"}s Penguins All
            <br />
            The Way Down ↓
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
