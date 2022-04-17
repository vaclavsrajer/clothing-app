import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories-selector";
import ProductCard from "../../components/product-card/product-card";
import { CategoryTitle, CategoryChildContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [product, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryChildContainer>
        {product &&
          product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryChildContainer>
    </Fragment>
  );
};

export default Category;
