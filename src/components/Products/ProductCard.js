import { useState } from "react";

const ProductCard = ({ p }) => {
  const { name, image, brand, specs, price } = p;
  const [finalPrice, setFinalPrice] = useState(price);
  return (
    <div className="flex justify-between items-center bg-white text-black my-5 p-4 rounded-xl hover:shadow-xl border">
      <div>
        <img src={image} alt="" className="w-24 h-24" />
      </div>
      <div>
        <p className="text-orange-600 font-semibold">{name}</p>
        <p>Brand: {brand}</p>
        <p>Model: {specs}</p>
        <p>Unit Price: {price} BDT</p>
      </div>
      <div className="flex flex-col">
        <button className="btn btn-xs mb-3 bg-red-600 border-0 text-white">Remove</button>
        <p className="text-orange-600 font-semibold">{finalPrice} BDT</p>
      </div>
    </div>
  );
};

export default ProductCard;
