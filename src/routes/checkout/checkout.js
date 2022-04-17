import { useSelector } from "react-redux"

import CheckoutItem from "../../components/checkout-item/checkout-item";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart-selector";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <TotalPrice>TOTAL: ${cartTotal}</TotalPrice>
    </CheckoutContainer>
  );
};

export default Checkout;
