import styled from "styled-components";
import Header from "./Header";
import { MainButton } from "../../styles/MainButton";
import Inputs from "./Inputs";
import ItemsInCart from "./Item.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { isOrderValiable } = useContext(ProductsContext);
  const { cart } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(cart);
  let price = 0;
  cart.forEach((element) => {
    price += Number(element.price.replace(",", "."));
  });
  return (
    <Wrapper>
      <Header></Header>
      {cart[0] ? (
        <>
          <ItemsInCart cartList={cart}></ItemsInCart>
          <Inputs></Inputs>
          <PriceInformation>
            <div>
              <h3>Subtotal</h3>
              <h4>R$ {String(price.toFixed(2)).replace(".", ",")}</h4>
            </div>
            <div>
              <h3>Frete</h3>
              <h4>Grátis</h4>
            </div>
            <div>
              <h3>Total a pagar</h3>
              <h4>R$ {String(price.toFixed(2)).replace(".", ",")}</h4>
            </div>
          </PriceInformation>
          <MainButton
            onClick={() => {
              if (isOrderValiable) {
                navigate("/checkout");
              } else {
                alert("Confira novamente os dados do pedido!");
              }
            }}
          >
            Confirmar compra
          </MainButton>
        </>
      ) : (
        <NoProducts>Você ainda não possui produtos no carrinho</NoProducts>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoProducts = styled.div`
  width: 60%;
  margin: auto;
  font-weight: 600;
  font-size: 26px;
  color: #757575;
  text-align: center;
`;

const PriceInformation = styled.div`
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #01214f;
    font-size: 16px;
    font-weight: 400;
  }

  h4 {
    color: #01214f;
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;
