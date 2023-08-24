import Api from "../lib/axios";

export const getAllCategories = async () => {
  try {
    const categories = await Api.get("/categories");
    return categories;
  } catch (error) {
    console.log("error>>>", error);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await Api.get("/products");
    return products;
  } catch (error) {
    console.log("error>>>", error);
  }
};
