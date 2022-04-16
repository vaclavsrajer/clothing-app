import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryTitle, CategoryChildContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
