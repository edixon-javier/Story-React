import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productToShow, setProductToShow] = useState({});
  
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckoutDetail = () => setIsCheckoutOpen(true);
  const closeCheckoutDetail = () => setIsCheckoutOpen(false);
  
  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutOpen,
        setIsCheckoutOpen,
        openCheckoutDetail,
        closeCheckoutDetail,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
