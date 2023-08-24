import React from "react";
import ProductBanner from "./ProductBanner";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <div className="pt-[10rem]">
      <ProductBanner text="View All Categories " path="/categories" />
      <AllProducts />
    </div>
  );
};

export default Products;
