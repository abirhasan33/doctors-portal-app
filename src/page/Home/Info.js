import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assest/icons/clock.svg";
import markker from "../../assest/icons/marker.svg";
import phone from "../../assest/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitel="Opneing Hous"
        bgclass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitel="Our Location"
        bgclass="bg-neutral"
        img={markker}
      ></InfoCard>
      <InfoCard
        cardTitel="Contact Us"
        bgclass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
