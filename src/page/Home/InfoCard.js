import React from "react";

const InfoCard = ({ img, cardTitel, bgclass }) => {
  return (
    <div className={`card lg:card-side bg-accent shadow-xl ${bgclass}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitel}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
