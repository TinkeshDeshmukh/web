"use client"

import { LampContainer } from "./ui/lamp"
import { motion } from "framer-motion";

export default function Intro(){
    return(
        <div className="intro absolute opacity-0 top-0 w-screen h-screen">
             <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Be Formless
      </motion.h1>
    </LampContainer>
        </div>
    )
}