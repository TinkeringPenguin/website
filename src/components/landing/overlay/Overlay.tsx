import React, { useState, useEffect, lazy, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";

// const Model = lazy(() => import("./Model"));

// TODO: optimize loading of component
const Overlay: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  // const [firstLoad, setFirstLoad] = useState(0);
  const [blueSide, setBlueSide] = useState(window.innerWidth > 700);
  const [top, setTop] = useState(window.scrollY < window.innerHeight);
  const [smallSize, setSmallSize] = useState(window.innerWidth < 1050);
  const [offset, setOffset] = useState(0);
  const [small, setSmall] = useState(window.innerWidth > 1050 ? 1 : 0.5);
  const [screenScale, setScreenScale] = useState(
    window.innerWidth > 1050 ? 1 : 0.5
  );
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<any>(null);
  const previousTimeRef = useRef<any>(null);

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
      if (loaded) return;
      setLoaded(true);
    };

    window.addEventListener("resize", handleResize);
    // init on mount
    handleResize();
  }, [screenScale, smallSize]);

  // TODO: on load animate penguin spinning by requestAnimationFrame on offset for 1.5 seconds
  // const startingRotation = 4 * Math.PI;
  // const animLength = 4000;
  // const animate = (time: number) => {
  //   if (previousTimeRef.current != undefined) {
  //     if (firstLoad === 0) {
  //       setFirstLoad(new Date().getTime());
  //     }
  //     const realTime =
  //       new Date().getTime() - (firstLoad ?? new Date().getTime());
  //     // console.log(new Date().getTime(), firstLoad, realTime);
  //     // if over 1.5 seconds, cancel animation
  //     if (realTime > animLength) {
  //       setOffset(0);
  //       return () => cancelAnimationFrame(requestRef.current);
  //     }
  //     // const deltaTime = time - previousTimeRef.current;

  //     // Pass on a function to the setter of the state
  //     // to make sure we always have the latest state
  //     console.log(
  //       ((animLength - realTime) / animLength) * 7 * startingRotation
  //     );
  //     setOffset(((animLength - realTime) / animLength) * 7 * startingRotation);
  //   }
  //   previousTimeRef.current = time;
  //   requestRef.current = requestAnimationFrame(animate);
  // };
  // useEffect(() => {
  //   if (loaded) {
  //     requestRef.current = requestAnimationFrame(animate);
  //     return () => cancelAnimationFrame(requestRef.current);
  //   }
  // }, [loaded]);

  return (
    <div
      className={`mobileOpacity pointer-events-none fixed z-0 mx-[5vw] h-[95vh] w-[30vh] min-w-[450px] -sm:mx-0 ${
        smallSize && top ? "extraMargin" : "3xl:ml-[12vw]"
      } ${loaded ? "penguinModelLoad" : ""}`}
    >
      <Canvas>
        <Model scroll={offset} small={small} />
        <ambientLight intensity={2.5} />
      </Canvas>
      {blueSide ? <div className="blueSide"></div> : null}
    </div>
  );
};

export default Overlay;
