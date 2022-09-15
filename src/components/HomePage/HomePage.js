import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Product from "./Product";
import PriceSelection from "./PriceSelection";
import { getProducts, postProducts } from "../../api/requests";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { priceFilter } from "../../utils/priceFilter.js";

export default function HomePage() {
  const [productsList, setProductsList] = useState([]);
  const { categorySelected, priceOption } = useContext(ProductsContext);

  useEffect(() => {
    async function fetchData() {
      // Insere os produtos no db se eles ainda não estiverem no banco local
      await postProducts();
      // Obtém os produtos para rendererização
      const promise = await getProducts();
      setProductsList(promise.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <Wrapper>
        <Categories></Categories>
        <WishList>
          <ion-icon name="heart-outline"></ion-icon>
          <span> Lista de Produtos</span>
        </WishList>
        <PriceSelection></PriceSelection>
        <ProductsWrapper>
          {!categorySelected
            ? priceFilter(productsList, priceOption).map((item) => (
                <Product
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  key={item.name}
                />
              ))
            : priceFilter(productsList, priceOption)
                .filter((value) => value.type === categorySelected)
                .map((item) => (
                  <Product
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    key={item.name}
                  />
                ))}
        </ProductsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100%; */
  background-color: #f5f5f5;
`;

const WishList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 16px;

  ion-icon {
    cursor: pointer;
    font-size: 20px;
    padding-right: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    color: #757575;
    cursor: pointer;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
