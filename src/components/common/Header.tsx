import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  // animate opacity on load
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // animate border bottom on load from left to right
    <header className="border-anim fixed top-0 z-50 w-full bg-gradient-to-b from-primary/40 to-transparent backdrop-blur-sm">
      <div className="m-auto flex max-w-[88em] flex-1 items-center justify-between px-16">
        <div className="flex items-center">
          <img
            src="/tmpicon.png"
            alt="Tinkering Penguin Logo"
            title="Tinkering Penguin Logo"
            className="my-4 h-12 w-12"
          />
        </div>
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } flex items-center transition-opacity duration-700 `}
        >
          {/* list of nav elements */}
          <ul className="flex items-center text-2xl font-light text-secondary">
            <li className="mx-4">
              <Link href="/" title="Home">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/#contact" title="Contact">
                Contact
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/projects" title="Projects">
                Projects
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="https://blog.antarcticsolutions.ca/"
                target="_blank"
                title="Blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
