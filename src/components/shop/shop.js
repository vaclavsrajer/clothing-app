import { useContext } from "react";

import ProductCard from "../product-card/product-card";
import { ProductsContext } from "../../contexts/product.context";
import "./shop.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}/>;
      })}
    </div>
  );
};

export default Shop;
