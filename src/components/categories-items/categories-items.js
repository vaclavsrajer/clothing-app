import { CategoriesContainer } from "./categories-items.styled.jsx";
import CategoryItem from "../category-item/category-item";

const CategoriesItems = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default CategoriesItems;
