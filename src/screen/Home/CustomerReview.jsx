import React from "react";
import CustomerReviewSlider from "./CustomerReviewSlider";

const CustomerReview = () => {
  return (
    <div className="overflow-hidden">
      <div className=" container mx-auto font-extralight">
        <div className="my-10 text-4xl pl-6">What our Customer think</div>
      </div>
      <CustomerReviewSlider />
    </div>
  );
};

export default CustomerReview;
