import React, { useEffect, useState } from "react";
import ProductBanner from "../products/ProductBanner";
import AllCategories from "./AllCategories";
import { getAllCategories } from "../../helpers/query";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const result = async () => {
      const categories = await getAllCategories();

      if (categories) {
        setCategories(categories?.data?.data);
      }
    };
    result();
  }, []);
  return (
    <div className="pt-[10rem]">
      <ProductBanner text="View All Products " path="/products" />
      {categories.length > 0 ? (
        <AllCategories categories={categories} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;
