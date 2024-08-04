"use client"
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png"


const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly Dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-Click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword Generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
        <p className="text-lg text-center md:text-xl max-w-2xl mx-auto text-white/70 mt-5 tracking-tight">
          From small stratups to large enterprises, our AI-driven tool has revolutionized the way
          businesses approaches SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">

        {tabs.map(tab => (
            <div key={tab.title} className="border border-white/15 flex lg:flex-1 items-center p-2.5 rounded-xl gap-2.5">
                <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex justify-center items-center">

                    <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay/>
                </div>
                    <div className="font-medium">
                        {tab.title}
                    </div>
                    {tab.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c4fff] text-black font-semibold">new</div>}
            </div>
        ))}
        </div>
        <div className="p-2.5 border border-white/20 rounded-xl mt-3">
            <div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{
                backgroundImage : `url(${productImage.src})`
            }}>

            </div>
        {/* <Image src={productImage} alt="Product Image"/> */}
        </div>
      </div>
    </section>
  );
};

export default Features;
