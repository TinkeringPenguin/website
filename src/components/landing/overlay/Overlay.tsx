import React, { useState, useEffect, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

// const Model = lazy(() => import("./Model"));

const Overlay: React.FC = React.memo(() => {
  const [blueSide, setBlueSide] = useState(window.innerWidth > 700);
  const [top, setTop] = useState(window.scrollY < window.innerHeight);
  const [smallSize, setSmallSize] = useState(window.innerWidth < 1050);
  const [offset, setOffset] = useState(0);
  const [small, setSmall] = useState(window.innerWidth > 1050 ? 1 : 0.5);
  const [screenScale, setScreenScale] = useState(
    window.innerWidth > 1050 ? 1 : 0.5
  );

  useEffect(() => {
    window.onscroll = () => {
      // if scrolled passed the middle of the transition from first to second
      if (window.scrollY < window.innerHeight) {
        if (1 - window.scrollY / window.innerHeight < 0.5) {
          setTop(false);
          if (smallSize) {
            setSmall(1.4 * 0.5 * screenScale);
          } else {
            setSmall(0.5 * screenScale);
          }
        } else {
          setTop(true);
          if (smallSize) {
            setSmall(
              1.4 * screenScale * (1 - window.scrollY / window.innerHeight)
            );
          } else {
            setSmall(screenScale * (1 - window.scrollY / window.innerHeight));
          }
        }
      } else {
        setTop(false);
        setSmall(0.5 * screenScale);
      }
      setOffset(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setBlueSide(true);
        setScreenScale(1);
        setSmall(1);
        setSmallSize(false);
      } else {
        setBlueSide(false);
        // 1-(1070-window.innerWidth)/1070
        setScreenScale(0.5);
        setSmall(0.5);
        setSmallSize(true);
      }
    };

    window.addEventListener("resize", handleResize);
    // init on mount
    handleResize();
  }, [screenScale, smallSize]);

  // on load animate penguin falling down

  return (
    <div
      className={`mobileOpacity pointer-events-none fixed top-[5vh] z-50 mx-[5vw] h-[95vh] w-[30vh] min-w-[450px] transition-all -sm:mx-0 ${
        smallSize && top ? "extraMargin" : "3xl:ml-[12vw]"
      }`}
    >
      <Canvas>
        <Model scroll={offset} small={small} />
        <ambientLight intensity={2.5} />
      </Canvas>
      {blueSide ? <div className="blueSide"></div> : null}
    </div>
  );
});

export default Overlay;
