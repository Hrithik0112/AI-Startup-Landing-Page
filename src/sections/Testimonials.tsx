"use client"
import React from "react";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import {motion} from "framer-motion"

const testimonials = [
  {
    text: "The Product has completely transformed how i manage my projects and deadlines",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "These AI tools have completely revelutionized our SEO entire strategy overnight",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "The User Interface is so intuitive and easy to use, it has saved us countless hours",
    name: "Alisa Haster",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "Our teams productivity has increased significantly since we start using this tool",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl tracking-tighter font-medium text-center">Beyond Expectations.</h2>
        <p className="text-lg md:text-xl text-center tracking-tight mt-5 text-white/70 max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our client strategies
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">

        <motion.div 
        initial={{
          translateX :"-50%"
        }}
        animate={{translateX : "0"}}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration : 30,
        }}
        className="flex flex-none pr-5 gap-5">
          {[...testimonials, ...testimonials].map((testimonial) => (
            <div
              key={testimonial.name}
              className="border max-w-xs md:max-w-md border-white/15 p-6 md:p-10 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] rounded-xl flex-none"
            >
              <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
              <div className="flex items-center gap-3 mt-5">
                <div className="relative after:absolute after:content-[''] after:inset-0 after:bg-[rgb(140,69,255)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:rounded-lg before:z-10 before:border before:border-white/30 ">
                  <Image
                    src={testimonial.avatarImg}
                    alt={`Avater image of ${testimonial.name}`}
                    className="h-11 w-11 rounded-lg grayscale"
                  />
                </div>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-white/50">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
