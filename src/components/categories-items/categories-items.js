import "./categories-items.scss";
import CategoryItem from "../category-item/category-item";

const CategoriesItems = ({ categories }) => {
  return (
    <div className="categories-container">
    {categories.map((category) => {
      return <CategoryItem key={category.id} category={category} />
    })}
  </div>
  );
};

export default CategoriesItems;
