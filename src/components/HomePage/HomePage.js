import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Product from "./Product";
import PriceSelection from "./PriceSelection";
import LoadingAnimation from "../common/LoadingAnimation";
import { getProducts, postProducts } from "../../api/requests";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { priceFilter } from "../../utils/priceFilter.js";

export default function HomePage() {
  const [productsList, setProductsList] = useState([]);
  const { categorySelected, priceOption, isProductInfoShown } =
    useContext(ProductsContext);

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
      <Wrapper isPopUp={isProductInfoShown}>
        <Categories></Categories>
        <WishList>
          <ion-icon name="heart-outline"></ion-icon>
          <span> Lista de Produtos</span>
        </WishList>
        <PriceSelection></PriceSelection>
        {productsList[0] ? (
          <ProductsWrapper isPopUp={isProductInfoShown}>
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
        ) : (
          <LoadingAnimationWrapper>
            <LoadingAnimation></LoadingAnimation>
          </LoadingAnimationWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  pointer-events: ${(props) => (props.isPopUp ? "none" : "initial")};
  overflow: ${(props) => (props.isPopUp ? "hidden" : "initial")};
`;

const WishList = styled.div`
  display: flex;
  align-items: center;
  top: 180px;
  left: 16px;
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 120px;
  padding-bottom: 40px;
  background-color: #f5f5f5;

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
  margin-top: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingAnimationWrapper = styled.div`
  margin-top: calc(50vh - 50px);
  margin-left: calc(50vw - 125px);
`;
