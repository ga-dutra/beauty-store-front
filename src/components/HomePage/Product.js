import { useContext, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";
import { UserContext } from "../../contexts/UserContext";
import ProductPopUp from "./ProductPopUp";

export default function Product({ img, name, description, price }) {
  const [heartLiked, setHeartLiked] = useState(false);
  const [hearticon, setHeartIcon] = useState("heart-outline");
  const [productInfoPopup, setProductInfoPopup] = useState(false);
  const { isProductInfoShown, setIsProductInfoShown } =
    useContext(ProductsContext);
  const { cart, setCart } = useContext(UserContext);

  function likeProduct() {
    setHeartLiked(!heartLiked);
    if (hearticon === "heart-outline") {
      setHeartIcon("heart");
    } else {
      setHeartIcon("heart-outline");
    }
  }

  function showProductInfo() {
    if (!isProductInfoShown) {
      setProductInfoPopup(!productInfoPopup);
      setIsProductInfoShown(!isProductInfoShown);
    }
  }

  function addProductToCart(name) {
    setCart([...cart, name]);
    console.log(cart);
  }

  return productInfoPopup ? (
    <ProductPopUp
      img={img}
      name={name}
      description={description}
      price={price}
      productInfoPopup={productInfoPopup}
      setProductInfoPopup={setProductInfoPopup}
    ></ProductPopUp>
  ) : (
    <ProductWrapper isPopUp={isProductInfoShown} isliked={heartLiked}>
      <img onClick={showProductInfo} src={img} alt={name} />
      <h1 onClick={showProductInfo}>{name}</h1>
      <h2 onClick={showProductInfo}>{description}</h2>
      <h3 onClick={showProductInfo}>R$ {price}</h3>
      <ion-icon onClick={likeProduct} name={hearticon}></ion-icon>
      <ion-icon
        onClick={() => addProductToCart(name)}
        name="cart-outline"
      ></ion-icon>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  margin: 10px;
  width: 136px;
  height: 200px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: ${(props) => (props.isPopUp ? "0.5" : "1")};
  pointer-events: ${(props) => (props.isPopUp ? "none" : "initial")};
  img {
    width: 58px;
    height: 72px;
    margin-left: 28px;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 10px;
    font-weight: 400;
    color: #757575;
    margin-bottom: 12px;
    width: 100px;
    max-height: 20px;
    overflow: hidden;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: #01214f;
  }

  ion-icon {
    position: absolute;
    font-size: 22px;
    cursor: pointer;
  }

  ion-icon:nth-last-child(1) {
    right: 10px;
    bottom: 10px;
  }
  ion-icon:nth-last-child(2) {
    right: 10px;
    top: 10px;
    animation-name: ${(props) => (props.isliked ? "like" : "")};
    animation-duration: 1.5s;
    fill: ${(props) => (props.isliked ? "rgb(187, 42, 42)" : "")};
  }

  @keyframes like {
    from {
      fill: white;
    }
    to {
      fill: rgb(187, 42, 42);
    }
  }
`;
