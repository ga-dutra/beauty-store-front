import { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function ProductPopUp({
  img,
  name,
  description,
  price,
  productInfoPopup,
  setProductInfoPopup,
}) {
  const { isProductInfoShown, setIsProductInfoShown } =
    useContext(ProductsContext);

  function showProductInfo() {
    setProductInfoPopup(!productInfoPopup);
    setIsProductInfoShown(!isProductInfoShown);
  }

  return (
    <ProductPopUpWrapper>
      <ProductPopUpContainer>
        <img src={img} alt={name} />
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>R$ {price}</h3>
        <ion-icon onClick={showProductInfo} name="arrow-undo"></ion-icon>
      </ProductPopUpContainer>
    </ProductPopUpWrapper>
  );
}

const ProductPopUpWrapper = styled.div`
  pointer-events: all;
  position: fixed;
  left: calc(50vw - 130px);
  top: 30vh;
  z-index: 4;
`;

const ProductPopUpContainer = styled.div`
  width: 260px;
  height: 360px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  img {
    width: 104px;
    height: 130px;
    margin-left: 68px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    color: #757575;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #01214f;
    position: absolute;
    bottom: 20px;
    left: 86px;
  }

  ion-icon {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 34px;
    fill: #ff4d5b;
    cursor: pointer;
  }
`;
