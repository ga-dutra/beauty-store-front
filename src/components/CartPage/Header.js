import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useContext(UserContext);

  return (
    <Wrapper>
      <ion-icon
        onClick={() => navigate("/")}
        name="chevron-back-outline"
      ></ion-icon>
      <h1>Carrinho</h1>
      <div>
        <ion-icon name="cart-outline"></ion-icon>
        <div>{cart.length}</div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  > ion-icon {
    font-size: 26px;
    cursor: pointer;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  > div {
    background-color: #ffffff;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    position: relative;

    ion-icon {
      font-size: 26px;
      position: absolute;
      top: 10px;
      left: 11px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 13px;
      background-color: #ff8e97;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: -7px;
      right: -2px;
    }
  }
`;
