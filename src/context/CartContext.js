import { createContext, useContext, useState } from 'react';
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};
