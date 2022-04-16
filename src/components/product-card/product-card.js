import { useContext } from "react";
import { CartContext } from "../../contexts/cart-toggle.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styled.jsx";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
