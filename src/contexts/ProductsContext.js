import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsStorage = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [productsWishList, setProductsWishList] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [priceOption, setPriceOption] = useState("");
  const [isProductInfoShown, setIsProductInfoShown] = useState(false);
  const [isWishListClicked, setIsWishListClicked] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
        priceOption,
        setPriceOption,
        isProductInfoShown,
        setIsProductInfoShown,
        sideMenu,
        setSideMenu,
        productsList,
        setProductsList,
        productsWishList,
        setProductsWishList,
        isWishListClicked,
        setIsWishListClicked,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsStorage, ProductsContext };
