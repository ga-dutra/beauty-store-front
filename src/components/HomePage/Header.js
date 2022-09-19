import { useContext, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { getCartList } from "../../api/requests";
import { UserContext } from "../../contexts/UserContext";
import { Quantity } from "../../styles/CartWrapper";

export default function Header() {
  const navigate = useNavigate();
  const [openedMenu, setOpenedMenu] = useState(false);
  const { token, cart, setCart } = useContext(UserContext);
  const { isProductInfoShown } = useContext(ProductsContext);
  function openMenu() {
    setOpenedMenu(!openedMenu);
  }

  function navigateToCart() {
    getCartList(token).then((res) => {
      console.log(res);
      setCart(res.data);
      navigate('/cart');
    }).catch(() => {
      navigate('/sign-in');
    });
  }

  return (
    <HeaderWrapper isPopUp={isProductInfoShown}>
      <HeaderItems>
        <InputWrapper>
          <input />
          <ion-icon name="search"></ion-icon>
        </InputWrapper>
        <CartWrapper>
          <ion-icon
            onClick={navigateToCart}
            name="cart-outline"
          ></ion-icon>
          <QuantityInCart>{cart.length}</QuantityInCart>
        </CartWrapper>
        {openedMenu ? (
          <OpenedMenu onClick={openMenu}>Opened menu</OpenedMenu>
        ) : (
          <ion-icon onClick={openMenu} name="menu"></ion-icon>
        )}
      </HeaderItems>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: -20px;
  height: 110px;
  width: 100vw;
  background-color: #ff8e97;
  border-radius: 25px;
  pointer-events: ${(props) => (props.isPopUp ? "none" : "initial")};
`;

const HeaderItems = styled.div`
  display: flex;
  position: absolute;
  top: 44px;
  width: 100%;
  justify-content: space-evenly;

  ion-icon {
    cursor: pointer;
    font-size: 40px;
    color: white;
    top: 50px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  padding-top: 4.5px;

  input {
    padding-left: 38px;
    height: 32px;
    width: 200px;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 54px;
    font-size: 17px;
    word-wrap: break-word;
  }

  input:focus {
    outline: none;
  }

  ion-icon {
    position: absolute;
    left: 8px;
    top: 10px;
    color: #757575;
    font-size: 22px;
  }
`;

const CartWrapper = styled.div`
  background-color: #FFABA6;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ion-icon {
    color: #ffffff;
    font-size: 32px;
  }
`;

const QuantityInCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF8E97;
  font-weight: 600;
  font-size: 13px;
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -7px;
  right: -2px;
`;

const OpenedMenu = styled.div``;
