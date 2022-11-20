import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Hero from "../components/landing/Hero";

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
      {/* overlay */}
      <Overlay />
      <main>
        <Hero />
        <Who />
      </main>
      <Footer />
    </>
  );
};

export default Home;
