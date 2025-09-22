"use client";

import gsap from "gsap";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const onEnter = (el: Element) => {
    gsap.to(el.querySelector(".hover_link"), {
      opacity: 1,
      boxShadow: "0 0 50px 10px rgba(56,189,248,0.8)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onLeave = (el: Element) => {
    gsap.to(el.querySelector(".hover_link"), {
      opacity: 0,
      boxShadow: "0 0 0px 0px rgba(56,189,248,0)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const navItems = [
    { href: "/Hero", label: "Home", height: "h-12" },
    { href: "/projects", label: "Projects", height: "h-[4.7rem]" },
    { href: "/about", label: "About", height: "h-[6.3rem]" },
  ];

  // Animate mobile menu open/close
  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: -50, opacity: 0, display: "none" },
        { y: 0, opacity: 1, display: "flex", duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else if (!isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <div className="w-screen">
      {/* Desktop Navbar (unchanged) */}
      <div className="hidden md:flex justify-end Nav">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`relative w-[18%] ${item.height} bg-white flex items-end justify-center`}
            onMouseEnter={(e) => onEnter(e.currentTarget)}
            onMouseLeave={(e) => onLeave(e.currentTarget)}
          >
            <Link
              href={item.href}
              className="text-[1.4vw] font-semibold text-center text-black z-30"
            >
              {item.label}
            </Link>
            <div className="hover_link absolute top-0 left-0 w-full bg-blue-900"></div>
          </div>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 mobNav  fixed top-0 left-0 w-full z-50">
        <h1 className="text[2rem] font-extrabold">
          <Image src="/logo.png" width={50} height={20} alt="image"/>
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Dropdown Menu (animated) */}
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg flex-col items-center hidden"
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="w-full text-center py-3 text-lg font-semibold text-black border-b"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
