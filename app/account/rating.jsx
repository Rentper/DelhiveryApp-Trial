"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = () => {
    
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);
  return (
    <div className="flex ">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label htmlFor="">
              <FaStar
                className="ml-2 text-lg p-0.5   "
                color={currentRate <= (rateColor || rating) ? "white" : "gray"}
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />

            </label>
          </>
        );
      })}
    </div>
  );
};

export default Rating;



