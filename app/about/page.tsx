"use client"
import AboutIntro from "components/AboutIntro";
import {
  RippleButton,
  RippleButtonRipples,
} from "components/animate-ui/primitives/buttons/ripple";
import Connect from "components/Connect";
import InternalNav from "components/InternalNav";
import { BackgroundBeamsWithCollision } from "components/ui/shadcn-io/background-beams-with-collision";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".About_heading", {
      y: 200,
      opacity: 0,
      duration: 1.2,
    });
    tl.to(".About_heading", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
    tl.to(".Intro_div", {
      opacity: 1,
    });
    tl.from(".name", {
      y: 50,
      opacity: 0,
    });
    tl.from(".sub", {
      y: 50,
      opacity: 0,
    });

    tl.to(".name", {
      x: "-38vw",
      y: "-40vh",
      scale: 0.35,
      duration: 0.6,
      delay: 4,
    });
    tl.to(
      ".sub",
      {
        opacity: 0,
        duration: 0.5,
      },
      "<"
    );

    tl.to(".para", {
      opacity: 1,
    });
    tl.from(".Internal_Nav_Div", {
      opacity: 0,
    });
    tl.from(".text_about", {
      opacity: 0,
      x: -100,
    });
    tl.from(".btn", {
      opacity: 0,
      y: 50,
    });
  });

  const handleClick = () => {
    gsap.to(".connect .icon", {
      y: -100,
      opacity: 1,
      ease: "elastic",
      duration: 1,
      stagger: 0.3,
    });
  };

  return (
    <div className="relative w-screen h-screen ">
      <BackgroundBeamsWithCollision className="bg-black">
        <div className="w-screen h-screen relative overflow-hidden">
          {/* Heading */}
          <div className="About_heading absolute top-[30%] md:top-0 left-[20%]">
            <h1 className="text-[14.5vw] text-center ">
              A Glimpse <br /> of Me
            </h1>
          </div>

          {/* Intro */}
          <div className="absolute Intro_div top-0 opacity-0 w-full">
            <AboutIntro />
          </div>

          {/* Paragraph + Internal Nav */}
          <div className="para absolute top-0 w-full px-4">
            <div className="w-full Internal_Nav_Div">
              <InternalNav name="Projects" link="/projects" />
            </div>

            <div className="w-full h-screen absolute top-[10%]  flex flex-col items-center justify-center gap-7 px-2">
              <h2 className="text-[3rem] md:text-[6vw]  text-center text_about ">
                Bringing pixels to life with motion, elegance, and innovation
              </h2>

              <div
                className="btn w-fit h-fit "
                onClick={() => handleClick()}
              >
                <RippleButton className="border-2 border-white w-[40vw] sm:w-[25vw] md:w-[12vw] h-[10vw] sm:h-[6vw] md:h-[3vw] rounded-3xl text-sm sm:text-base md:text-lg">
                  Ping Me
                  <RippleButtonRipples />
                </RippleButton>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="w-full flex  justify-center items-center absolute bottom-0">
            <Connect />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
