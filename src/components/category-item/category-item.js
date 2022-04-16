import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { title, id, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
