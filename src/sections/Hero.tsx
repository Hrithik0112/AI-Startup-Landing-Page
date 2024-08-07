"use client"
import Button from "@/components/Button";
import React, { useRef } from "react";
import starsBg from "@/assets/stars.png";
import {motion, useScroll, useTransform} from "framer-motion"

const Hero = () => {

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target : sectionRef,
    offset : ["start end", "end start"]
  })

  const backgroundPositionY = useTransform(scrollYProgress,[0, 1],[-300,300])
  return (
    <motion.section
    ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX : starsBg.width
      }}
      transition={{
        repeat : Infinity,
        ease : "linear",
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* planet start */}
      <div className="w-64 h-64 md:h-96 md:w-96 rounded-full bg-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* planet end */}
      {/* ring 1 start */}
      <motion.div
      style={{
        translateX : "-50%",
        translateY : "-50%"
      }}
      animate={{
        rotate : "1turn"
      }}
      transition={{
        repeat: Infinity,
        duration : 60,
        ease : "linear"
      }}
      className="h-[344px] w-[344px] md:h-[580px] md:w-[580px]  absolute rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 rounded-full bg-white absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 rounded-full bg-white absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-5 w-5 rounded-full border border-white inline-flex justify-center items-center absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* ring 1 end */}
      {/* ring 2 start */}
      <motion.div 
      style={{
        translateX : "-50%",
        translateY : "-50%"
      }}
      animate={{
        rotate : "-1turn"
      }}
      transition={{
        repeat: Infinity,
        duration : 60,
        ease : "linear"
      }}
      className=" absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed  "></motion.div>
      {/* ring 2 end */}
      {/* ring 3 start */}
      <motion.div 
      style={{
        translateX : "-50%",
        translateY : "-50%"
      }}
      animate={{
        rotate : "1turn"
      }}
      transition={{
        repeat: Infinity,
        duration : 90,
        ease : "linear"
      }}
      className=" absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
        <div className="h-2 w-2 rounded-full bg-white absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 rounded-full bg-white absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* rign 3 end */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-center text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5">
          Elavates Your Site Visibility effortlessly with AI, when smart technology meets
          user-friendly SEO tool.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
