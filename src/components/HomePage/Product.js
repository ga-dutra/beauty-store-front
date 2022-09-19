import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postItemInCart } from "../../api/requests";
import { ProductsContext } from "../../contexts/ProductsContext";
import { UserContext } from "../../contexts/UserContext";
import ProductPopUp from "./ProductPopUp";
import { getCartList } from "../../api/requests";

export default function Product({ img, name, description, price, liked, id }) {
  const [heartLiked, setHeartLiked] = useState(false);
  const [hearticon, setHeartIcon] = useState("heart-outline");
  const [cartType, setCartType] = useState("cart-outline");
  const [productInfoPopup, setProductInfoPopup] = useState(false);
  const { token, setCart } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    productsWishList,
    setProductsWishList,
    isProductInfoShown,
    setIsProductInfoShown,
    sideMenu,
  } = useContext(ProductsContext);

  function likeProduct() {
    const productLiked = {
      img: img,
      name: name,
      description: description,
      price: price,
    };
    const list = productsWishList;
    const isInList = list.filter((element) => {
      if (element.name === productLiked.name) {
        return true;
      } else return false;
    });

    if (!isInList[0]) {
      list.push(productLiked);
      setProductsWishList(list);
    } else {
      const filtered = list.filter((element) => {
        if (element.name === productLiked.name) {
          return 0;
        } else return 1;
      });
      setProductsWishList(filtered);
    }

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

  function addProductToCart() {
    const productId = id;

    postItemInCart(token, productId)
      .then((res) => {
        if (res.data === "product inserted on cart-list") {
          setCartType("cart");
          getCartList(token).then((res) => {
            setCart(res.data);
          });
        } else {
          setCartType("cart-outline");
          getCartList(token).then((res) => {
            setCart(res.data);
          });
        }
      })
      .catch(() => {
        navigate("/sign-in");
      });
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
    <ProductWrapper
      isPopUp={isProductInfoShown}
      isliked={heartLiked}
      isSideMenu={sideMenu}
      isWishedList={liked}
    >
      <img onClick={showProductInfo} src={img} alt={name} />
      <div>
        <h1 onClick={showProductInfo}>{name}</h1>
        <h2 onClick={showProductInfo}>{description.slice(0, 37)}...</h2>
        <h3 onClick={showProductInfo}>R$ {price}</h3>
      </div>
      {liked ? (
        <ion-icon class="heart" name="heart"></ion-icon>
      ) : (
        <ion-icon onClick={likeProduct} name={hearticon}></ion-icon>
      )}

      <ion-icon onClick={addProductToCart} name={cartType}></ion-icon>
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
  opacity: ${(props) => (props.isPopUp || props.isSideMenu ? "0.5" : "1")};
  pointer-events: ${(props) =>
    props.isPopUp || props.isSideMenu ? "none" : "initial"};

  div {
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
  }

  img {
    width: 58px;
    height: 72px;
    margin-left: 28px;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 14px;
    font-weight: 600;
    width: 118px;
  }

  h2 {
    font-size: 10px;
    font-weight: 400;
    color: #757575;
    width: 120px;
    line-height: 12px;
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

  .heart {
    fill: rgb(187, 42, 42);
  }
`;
