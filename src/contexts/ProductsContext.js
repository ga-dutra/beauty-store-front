import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsStorage = ({ children }) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [priceOption, setPriceOption] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
        priceOption,
        setPriceOption,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsStorage, ProductsContext };
