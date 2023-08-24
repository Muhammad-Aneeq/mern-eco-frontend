import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Button from "../Button";
import { getAllCategories } from "../../helpers/query";

export const revalidate = 60; // revalidate this page every 60 seconds

const TopCategories = () => {
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
    <div className="md:w-11/12 w-full mx-auto py-12 px-8 ">
      <h1 className="text-xl font-semibold">Shop Our Top Categories</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-8">
        {categories.length > 0 ? (
          categories
            .slice(0, 4)
            ?.map((category, i) => <CategoryCard category={category} key={i} />)
        ) : (
          <p>Loadind...</p>
        )}
      </div>
      <Button text="Browse All Categories" path="/categories" />
    </div>
  );
};

export default TopCategories;
