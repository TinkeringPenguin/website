import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import Hero from "../components/landing/Hero";
import ProjectComponent from "../components/ProjectComponent";

// dynamic import overlay
const Overlay = dynamic(() => import("../components/landing/overlay/Overlay"), {
  ssr: false,
});
const Who = dynamic(() => import("../components/landing/Who"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectComponent />
      </main>
      <Footer />
    </>
  );
};

export default Home;
