import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card max:w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nisi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nisi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nisi!
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4>{review.name}</h4>
            <p>{review.location}</p>
            <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
