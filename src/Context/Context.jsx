import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productToShow, setProductToShow] = useState({});

  //? visual to prodroduct detail
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  //? visual to products add card
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckoutDetail = () => setIsCheckoutOpen(true);
  const closeCheckoutDetail = () => setIsCheckoutOpen(false);

  //? productos to card
  const [cartProducts, setCartProducts] = useState([]);

  //? order
  const [order, setOrder] = useState([]);

  //? filter input search
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchByTitle, setsearchByTitle] = useState(null);

  //? filter by category
  const [searchByCategory, setsearchByCategory] = useState(null);



  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(value => value.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(value => value.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle){
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }

    if(searchByCategory){
      setFilteredItems(filteredItemsByCategory(items, searchByCategory))
    }
  }, [items, searchByTitle, searchByCategory]);



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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setsearchByTitle,
        filteredItems,
        setsearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
