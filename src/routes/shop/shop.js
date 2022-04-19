import { Routes, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/categories-action";

import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
