import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styled.jsx";

import ProductCard from "../product-card/product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          <span>{title.toUpperCase()}</span>
        </Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
