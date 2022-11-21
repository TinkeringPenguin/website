import { type NextPage } from "next";
import Link from "next/link";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Title from "../components/SEO/Title";

const Custom404: NextPage = () => {
  return (
    <>
      <Title title="Tinkering Penguin | Lost in Antarctica" />
      <Header />
      <main className="backgroundPile flex min-h-screen items-center justify-center bg-primary">
        <div className="m-auto max-w-4xl justify-center p-8 text-4xl">
          <h1 className="my-8 text-7xl font-bold text-secondary -sm:my-4 -sm:text-5xl">
            Page 404
          </h1>
          <h2 className="my-8 pr-[15vw] text-5xl text-secondary/80 -sm:my-4 -sm:text-3xl">
            Looks like you got lost in Antarctica ⛄
          </h2>
          <Link href="/">
            <Button text={"Take me Home →"} />
          </Link>
        </div>
      </main>
    </>
  );
};
export default Custom404;
