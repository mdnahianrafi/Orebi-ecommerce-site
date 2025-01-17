import React, { useState } from "react";
import Heading from "./Heading";

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative flex items-center space-x-2">
      {/* Minus Button */}
      <button
        onClick={decreaseQuantity}
        className="absolute top-0 px-3 text-white left-2"
      >
   <Heading as='h3' text="-"className='mb-1 text-xl text-black'/>
      </button>

      {/* Quantity Display */}
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
        className="w-[139px] py-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Plus Button */}
      <button
        onClick={increaseQuantity}
        className="px-3  text-white  absolute top-0  left-[100px]"
      >
        <Heading as='h3' text="+"className='mb-1 text-xl text-black'/>
      </button>
    </div>
  );
};

export default QuantityBox;
