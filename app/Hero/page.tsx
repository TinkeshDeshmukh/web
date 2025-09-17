"use client"
import Navbar from "../../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";
import Preloader from "../../components/Preloader";

gsap.registerPlugin(MotionPathPlugin);

export default function Hero() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const arrowRef = useRef<SVGPolygonElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".loader_div", {
      opacity: 0,
      delay: 3,
    });
    tl.to(".main_div",{
      opacity:1,
      duration:0.1
    })

    tl.from(".heroText", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
    });
    tl.to(".Nav",{
      opacity:1,
      duration:0.1
    })
    tl.from(".Nav div", {
      height: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: -0.2,
    });

    // Animate the growth line
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    // Arrow follows the path
    tl.to(
      arrowRef.current,
      {
        opacity:1,
        duration: 2,
        ease: "power2.out",
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate:true
        },
      
      },
      "<" // run at the same time as line drawing
    );
  });

  return (
    <div className="h-screen w-screen p-1 overflow-hidden relative">
      <Navbar />
      <Preloader />

      <div className="main_div opacity-0 h-full w-full flex justify-center items-center fixed top-2 left-0">
        <div className="flex justify-center items-center">
          <h1 className="relative heroText text-[8.5vw] text-center w-[65%]">
            Create Beyond Boundaries.
          </h1>

          <svg
            className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[100%] h-[80%]"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              opacity={0}
              d="M20,50 Q100,120 170,55 Q185,40 195,25"
              stroke="#fff"
              strokeWidth="1.5"
              fill="transparent"
              strokeLinecap="round"
            />
            {/* moving arrow instead of markerEnd */}
            <polygon
            opacity={0}
              ref={arrowRef}
              points="0,-5 10,0 0,5"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
