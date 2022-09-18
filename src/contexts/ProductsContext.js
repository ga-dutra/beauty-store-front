import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsStorage = ({ children }) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [priceOption, setPriceOption] = useState("");
  const [isProductInfoShown, setIsProductInfoShown] = useState(false);
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsStorage, ProductsContext };
