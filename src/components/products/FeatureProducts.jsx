import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../helpers/query";
import ProductSlider from "./ProductSlider";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const result = async () => {
      const products = await getAllProducts();

      if (products) {
        setProducts(products?.data?.data);
      }
    };
    result();
  }, []);
  return (
    <div className="md:w-11/12 w-full mx-auto py-12 px-8 ">
      <h1 className="text-xl font-semibold">Best Deals For You</h1>
      {products.length > 0 ? (
        <ProductSlider products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FeatureProducts;
