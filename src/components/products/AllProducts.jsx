import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../helpers/query";

const AllProducts = () => {
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
    <div className="max-w-[90%] mx-auto mb-20 grid  sm:grid-cols-2 md:grid-cols-3  gap-12 justify-center lg:justify-between  ">
      {products.length > 0 ? (
        products?.map((product, i) => <ProductCard product={product} key={i} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AllProducts;
