import { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function WishList() {
  const { productsWishList, isWishListClicked, setIsWishListClicked } =
    useContext(ProductsContext);

  return (
    <Wrapper>
      <ion-icon
        onClick={() => setIsWishListClicked(!isWishListClicked)}
        name="heart-outline"
      ></ion-icon>
      <span onClick={() => setIsWishListClicked(!isWishListClicked)}>
        Lista de Desejos
      </span>
      {isWishListClicked ? (
        <ion-icon
          onClick={() => setIsWishListClicked(!isWishListClicked)}
          name="arrow-back-circle-outline"
          class="return-icon"
        ></ion-icon>
      ) : (
        ""
      )}
      {isWishListClicked ? (
        productsWishList[0] ? (
          ""
        ) : (
          <h4>Você ainda não possui itens na lista de desejos!</h4>
        )
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  color: #757575;
  ion-icon {
    cursor: pointer;
    font-size: 20px;
    padding-right: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }

  .return-icon {
    font-size: 26px;
    padding-left: 90px;
  }

  h4 {
    position: fixed;
    top: 260px;
    left: 20px;
    width: 90vw;
    color: #01214f;
  }
`;
