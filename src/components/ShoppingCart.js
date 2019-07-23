import React, { useContext } from "react";

// Components
import Item from "./ShoppingCartItem";
import CartContext from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <Item
          key={item.id + Math.floor(Math.random() * 1001)}
          {...item}
          removeItem={removeItem}
        />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
