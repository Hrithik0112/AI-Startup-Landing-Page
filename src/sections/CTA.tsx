import Button from "@/components/Button";
import React from "react";
import starsBg from "@/assets/stars.png"
import gridLines from "@/assets/grid-lines.png"

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative " style={{
            backgroundImage : `url(${starsBg.src})`
        }}>
            <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
                backgroundImage : `url(${gridLines.src})`
            }}></div>
            <div className="relative">

        <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium text-center tracking-tighter">AI-driven SEO for everyone.</h2>
        <p className="text-lg md:text-xl max-w-xs mx-auto text-white/50 tracking-tight text-center px-4 mt-5">Achieve clear, impactful result without the complexity.</p>
        <div className="flex justify-center mt-8">
            <Button>Join waitlist</Button>
        </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
