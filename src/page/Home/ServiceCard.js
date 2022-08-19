import React from "react";
import treatment from "../../assest/images/treatment.png";

const ServiceCard = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="pr-10 lg:p-20">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-4 text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Id, ad cupiditate accusantium animi explicabo accusamus, eum
              quidem dolor nostrum, laudantium vel aliquid? Cupiditate itaque
              dicta veritatis quidem nisi, est natus.
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
          <img
            src={treatment}
            className="max-w-sm lg:pl-28 rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
