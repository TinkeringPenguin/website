import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const LinkIcon: React.FC<{
  href: string;
  title: string;
  children: React.ReactNode;
}> = ({ href, title, children }) => {
  return (
    <Link
      href={href}
      title={title}
      target="_blank"
      className="mx-2 hover:text-secondary"
    >
      {children}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    // background of pile.png
    <footer
      id="footer"
      className="backgroundPileMain min-h-[80vh] bg-primary text-center text-3xl text-secondary/80 -md:min-h-[60vh] -sm:text-xl"
    >
      <div className="flex h-full flex-row">
        <span className="flex-1"></span>
        {/* links */}
        <div className="flex min-h-[80vh] flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-center">
            <p>
              ©️ 2022 •{" "}
              <Link href="/" title="Home">
                Home
              </Link>
              •{" "}
              <Link href="/#contact" title="Contact">
                Contact
              </Link>{" "}
              •{" "}
              <Link href="/projects" title="Projects">
                Projects
              </Link>{" "}
              •{" "}
              <Link
                href="https://blog.antarcticsolutions.ca/"
                target="_blank"
                title="Blog"
              >
                Blogs
              </Link>
            </p>
            <span className="mt-4 flex w-full justify-center text-center text-secondary/80">
              {/* Icon links for youtube, twitter, github, and email */}
              <LinkIcon
                href="https://youtube.com/@tinkeringpenguin"
                title="Tinkering Penguin YouTube"
              >
                <FaYoutube className="m-2" size={48} />
              </LinkIcon>
              <LinkIcon
                href="https://twitter.com/@tinkeringpenguin"
                title="Tinkering Penguin Twitter"
              >
                <FaTwitter className="m-2" size={48} />
              </LinkIcon>
              <LinkIcon
                href="https://github.com/TinkeringPenguin"
                title="Tinkering Penguin GitHub"
              >
                <FaGithub className="m-2" size={48} />
              </LinkIcon>
              <LinkIcon
                href="mailto:andrew@tinkeringpenguin.com"
                title="Tinkering Penguin Email"
              >
                <HiMail className="m-2" size={48} />
              </LinkIcon>
            </span>
          </div>
          <span className="flex-1"></span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
