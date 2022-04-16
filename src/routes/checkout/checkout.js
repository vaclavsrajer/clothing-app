import { useContext } from "react";

import { CartContext } from "../../contexts/cart-toggle.context";

import CheckoutItem from "../../components/checkout-item/checkout-item";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
