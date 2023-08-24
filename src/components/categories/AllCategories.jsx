import React from "react";
import CategoryCard from "./CategoryCard";

const AllCategories = ({ categories }) => {
  return (
    <div className="max-w-[90%] mx-auto mb-20 grid sm:grid-cols-2 grid-cols-1 gap-4 ">
      {categories?.map((categoryData, i) => (
        <CategoryCard category={categoryData} key={i} />
      ))}
    </div>
  );
};

export default AllCategories;
