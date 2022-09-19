import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import Product from "./Product";
import PriceSelection from "./PriceSelection";
import WishList from "./WishList";
import LoadingAnimation from "../common/LoadingAnimation";
import { getProducts, postProducts } from "../../api/requests";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { priceFilter } from "../../utils/priceFilter.js";
import SidebarMenu from "./SidebarMenu";
import { UserContext } from "../../contexts/UserContext";

export default function HomePage() {
  const {
    productsList,
    setProductsList,
    productsWishList,
    categorySelected,
    priceOption,
    isProductInfoShown,
    sideMenu,
    isWishListClicked,
  } = useContext(ProductsContext);
  const { token } = useContext(UserContext);
  console.log(token);

  useEffect(() => {
    async function fetchData() {
      await postProducts();
      const promise = await getProducts();
      setProductsList(promise.data);
    }
    fetchData();
  }, [setProductsList]);

  console.log(productsWishList);
  return (
    <>
      <Header></Header>
      {sideMenu ? <SidebarMenu></SidebarMenu> : ""}
      <Wrapper isPopUp={isProductInfoShown} isSideMenu={sideMenu}>
        <Categories></Categories>
        <WishList></WishList>
        <PriceSelection></PriceSelection>
        {productsWishList[0] ? (
          <WishListWrapper isWishListClicked={isWishListClicked}>
            {productsWishList.map((item) => (
              <Product
                img={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
                liked={true}
                id={item._id}
                key={item.name}
              />
            ))}
          </WishListWrapper>
        ) : (
          ""
        )}
        {productsList[0] ? (
          <ProductsWrapper
            isPopUp={isProductInfoShown}
            isWishListClicked={isWishListClicked}
          >
            {!categorySelected
              ? priceFilter(productsList, priceOption).map((item) => (
                  <Product
                    id={item._id}
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    liked={false}
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
                      liked={false}
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
  pointer-events: ${(props) =>
    props.isPopUp || props.isSideMenu ? "none" : "initial"};
  overflow: ${(props) => (props.isPopUp ? "hidden" : "initial")};
`;

const ProductsWrapper = styled.div`
  margin-top: 300px;
  flex-wrap: wrap;
  justify-content: center;
  display: ${(props) => (props.isWishListClicked ? "none" : "flex")};
`;

const LoadingAnimationWrapper = styled.div`
  margin-top: calc(50vh - 50px);
  margin-left: calc(50vw - 125px);
`;

const WishListWrapper = styled.div`
  margin-top: 260px;
  flex-wrap: wrap;
  z-index: 5;
  justify-content: center;
  display: ${(props) => (props.isWishListClicked ? "flex" : "none")};
`;

export { ProductsWrapper };
