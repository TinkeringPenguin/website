import Link from "next/link";
import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import Button from "../common/Button";

const Contact: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [title, changeTitle] = useState("");
  const [body, changeBody] = useState("");
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (intersection && intersection.intersectionRatio > 0.75 && !scrolled)
    setScrolled(true);

  const sendEmail = (e: any) => {
    e.preventDefault();
    window.open(
      `mailto:andrew@tinkeringpenguin.com?subject=${title}&body=${body}`,
      "_self"
    );
  };
  return (
    // animate border bottom on load from left to right
    <div
      id="contact"
      className="flex w-screen flex-row items-center bg-secondary py-[15vh] pl-[30vw] pr-[20vw] -sm:pr-2"
    >
      {/* once scrolled in bounce animate image of phone.png */}
      {/* <div
        className={`realive top-[102%] right-0 h-64 w-64 ${
          scrolled ? "bounceInRight" : "translate-x-[16rem]"
        }`}
      >
        <img src="/contact.svg" alt="phone" className="h-32 w-32" />
      </div> */}
      <div className={scrolled ? "fadeIn" : "opacity-0"}>
        <h3
          className="text-7xl font-bold text-primary -sm:text-5xl"
          ref={intersectionRef}
        >
          <span className="text-accent">Me</span>
          <wbr />
          .contact()
        </h3>

        <form onSubmit={(e) => sendEmail(e)} className="pt-12">
          <input
            className="inputForms text-primary transition-all  -sm:w-4/5"
            placeholder="Email Title"
            onChange={(e) => changeTitle(e.target.value)}
          />
          <br />
          <textarea
            className="inputForms text-primary transition-all  -sm:w-4/5"
            style={{ marginBottom: "1rem!important" }}
            placeholder="Message"
            rows={4}
            onChange={(e) => changeBody(e.target.value)}
          />
          <br />
          <p className="mb-8 text-xl italic text-primary/60 -sm:text-lg">
            Or email{" "}
            <Link
              href="mailto:andrew@tinkeringpenguin.com"
              className="text-accent hover:text-buttonHover"
            >
              andrew@
              <wbr />
              tinkingpenguin.com
            </Link>
          </p>

          <button
            title="Send email"
            type="submit"
            className="m-auto mb-8 rounded-xl bg-button py-4 px-8 text-center text-3xl text-white transition-all hover:bg-buttonHover  -sm:text-2xl "
          >
            Send {">>"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
