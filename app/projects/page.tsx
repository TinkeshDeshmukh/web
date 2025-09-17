"use client"
import gsap from "gsap";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InternalNav from "@/components/InternalNav";

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
    tl.from(".internalNav",{
      opacity:0,
      y:-50
      // scale:1.2
      
    })
    // Cards fade in
    tl.from(".right_compo", {
      opacity: 0,
      x:200,
      duration: 1,
    });

    // Popcorn animation for letters
    tl.from(".letter", {
      y: 300,
      opacity: 0,
      scale: 0.3,
      rotation: () => gsap.utils.random(-720,720,90), // random rotation per letter
      ease: "elastic.out(1, 0.6)",
      stagger: 0.15,
      duration: 1,
    },"<");
    tl.from(".link_btn",{
      y:20,
      opacity:0,
    })


    
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
    <div className="w-screen h-screen relative bg-gray-900 overflow-hidden">

      {/* Head Text */}
      <div className="w-screen  overflow-hidden h-screen flex justify-center items-center headText opacity-0 relative">
        <h1 className="text-[14vw] w-[60%] h-[90%] text-center absolute text-white">
          Discover Magic
        </h1>
      </div>

      {/* Cards + Animated Letters */}
      <InternalNav name="About" link="/about" />

      <div className=" w-full h-full flex justify-between gap-6 items-center absolute top-0  px-8">

        <div className="w-[40%] flex flex-col justify-center items-center">
          <h2 className="text-[8vw] text-center text-white">
            {["Unfold", "Stories"].map((word, wIndex) => (
              <span key={wIndex} className="inline-block">
                {word.split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char}
                  </span>
                ))}
                <br />
              </span>
            ))}
          </h2>

          {/* Properly styled Access button */}
          <Link href="https://github.com/TinkeshDeshmukh" className="inline-block">
            <button  className=" link_btn mt-4 px-6 py-3 text-center flex  justify-center items-center text-[1.3vw]">
              Access 
            <ArrowUpRight/>

            </button>
          </Link>
        </div>

        <div className="w-[60%] right_compo ">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
}
