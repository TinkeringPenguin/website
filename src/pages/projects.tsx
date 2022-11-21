import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ProjectComponent from "../components/ProjectComponent";

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
