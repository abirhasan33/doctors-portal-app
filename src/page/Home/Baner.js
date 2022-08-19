import React from "react";
import chair from "../../assest/images/chair.png";
import bgimg from "../../assest/images/bg.png";
import PrimaryButton from "../PrimaryButton";

const Baner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bgimg})`,
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="pr-10">
            <h1 className="text-5xl font-bold">Your new Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id, ad cupiditate accusantium animi explicabo accusamus, eum
              quidem dolor nostrum, laudantium vel aliquid? Cupiditate itaque
              dicta veritatis quidem nisi, est natus.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
