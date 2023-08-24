import * as React from "react";
import Button from "../Button";
import { getSubString } from "../../helpers";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, description, price, slug, image, quantity } = product;

  return (
    <div className="max-w-[350px] mx-auto lg:h-[520px] h-[550px] px-6 py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[#F8DE7E] cursor-pointer hover:scale-95">
      <Link to={`/products/${slug}`}>
        <div className="h-[280px] flex justify-center items-center">
          <img
            alt="product_image"
            src={image}
            width="200"
            height="200"
            className="overflow-auto mx-auto object-contain"
          />
        </div>
        <div className="lg:h-[130px] h-[165px] mb-6  py-3">
          <div className="flex justify-between">
            <p className="font-semibold">{getSubString(name, 20)}</p>
            <p className="text-[#F8DE7E] font-semibold ">${price}</p>
          </div>
          <div className="py-2 h-[76px]">{getSubString(description, 80)}</div>
        </div>
      </Link>
      <div className="flex justify-between">
        <Button text="Add to Cart" />
      </div>
    </div>
  );
};
export default ProductCard;
