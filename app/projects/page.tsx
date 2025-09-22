"use client";
import gsap from "gsap";
import { AnimatedTestimonials } from "components/ui/animated-testimonials";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InternalNav from "components/InternalNav";

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Head text animation
    tl.to(".headText", {
      y: -100,
      opacity: 1,
      duration: 1.5,
    });
    tl.to(".headText", {
      opacity: 0,
      duration: 1.5,
    });
    tl.from(".internalNav", {
      opacity: 0,
      y: -50,
    });

    // Cards fade in
    tl.from(".right_compo", {
      opacity: 0,
      x: 200,
      duration: 1,
    });

    // Popcorn animation for letters
    tl.from(
      ".letter",
      {
        y: 300,
        opacity: 0,
        scale: 0.3,
        rotation: () => gsap.utils.random(-720, 720, 90),
        ease: "elastic.out(1, 0.6)",
        stagger: 0.15,
        duration: 1,
      },
      "<"
    );

    tl.from(".link_btn", {
      y: 20,
      opacity: 0,
    });
  });

  const testimonials = [
    {
      quote:
        "Application to provide tailored advice to users about exercise and diet according to their health concern, location, and preference.",
      name: "Health IQ.AI",
      designation: "HealthIQ.AI",
      src: "/project-1.png",
    },
    {
      quote:
        "Analyze your garden plants with images and know more about them to care better.",
      name: "LeafLogic",
      designation: "LeafLogic",
      src: "/project-2.png",
    },
    {
      quote:
        "Cloned an animated Website to enhance my skills and learn new things.",
      name: "Website Clone",
      designation: "Website Clone (K72.ca)",
      src: "/project-3.png",
    },
  ];

  return (
    <div className="w-screen h-screen relative bg-gray-900 overflow-x-hidden md:overflow-hidden">
      {/* Head Text */}
      <div className="w-screen overflow-hidden h-screen flex justify-center items-center headText opacity-0 relative">
        <h1
          className="text-white text-center absolute
          text-[22vw] md:text-[12vw]
          w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
        >
          Discover <br />
          Magic
        </h1>
      </div>

      {/* Cards + Animated Letters */}
      <InternalNav name="About" link="/about" />

      <div className="w-full h-full flex flex-col  md:flex-row justify-around gap-10 md:gap-6 items-center absolute top-[10%] md:top-0  px-4 sm:px-6 md:px-8 py-8">
        {/* Left Letters Section */}
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:items-start text-center md:mt-0">
          <h2 className="text-white text-[12vw] md:text-[8.5vw] leading-tight">
            {["Unfold", "Stories"].map((word, wIndex) => (
              <span key={wIndex} className="inline md:block">
                {word.split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char}
                  </span>
                ))}
                <br />
              </span>
            ))}
          </h2>

          {/* Access Button */}
          <Link
            href="https://github.com/TinkeshDeshmukh"
            className="inline-block mt-4 w-full"
          >
            <button className="link_btn px-4 w-full sm:px-6 py-2 sm:py-3 text-[3vw] sm:text-[1.3vw] flex justify-center items-center gap-2">
              Access <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </Link>
        </div>

        {/* Right Testimonials Section */}
        <div className="w-full md:w-[60%] mt-4 flex justify-center md:mt-0 right_compo">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
