import React from "react";

const Button = (props : React.PropsWithChildren) => {
  return (
    <button className="py-2 px-3 relative rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ">
      <div className="absolute inset-0">
        <div className="inset-0 rounded-lg border absolute border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="inset-0 border rounded-lg absolute border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
