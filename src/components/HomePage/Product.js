import { useState } from "react";
import styled from "styled-components";

export default function Product({ img, name, description, price }) {
  const [heartLiked, setHeartLiked] = useState(false);
  const [hearticon, setHeartIcon] = useState("heart-outline");

  function likeProduct() {
    setHeartLiked(!heartLiked);

    if (hearticon === "heart-outline") {
      setHeartIcon("heart");
    } else {
      setHeartIcon("heart-outline");
    }
  }

  return (
    <ProductWrapper isliked={heartLiked}>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>R$ {price}</h3>
      <ion-icon onClick={likeProduct} name={hearticon}></ion-icon>
      <ion-icon name="cart-outline"></ion-icon>
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
