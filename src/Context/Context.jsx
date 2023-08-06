import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

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
    return items?.filter((value) =>
      value.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((value) =>
      value.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByTitle).filter((value) =>
        value.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }

    if (searchType === null) {
      return items;
    }
  };
  console.log("searchByTitle", searchByTitle);  

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
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
        setsearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
