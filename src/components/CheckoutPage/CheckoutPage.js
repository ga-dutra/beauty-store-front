import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import checked from "../../assets/img/checked.png";
import { UserContext } from "../../contexts/UserContext";
import { Body, Icon, Text } from "../../styles/CheckoutWrapper.js";
import { postOrder } from "../../api/requests";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  function navigateToMain() {
    const promise = postOrder(token);
    promise.then((res) => {
      setTimeout(() => navigate("/"), 5000);
    });
  }
  navigateToMain();
  return (
    <Body>
      <Icon src={checked}></Icon>
      <Text>
        Seu pedido foi confirmado e chegará em breve na sua residência!
      </Text>
    </Body>
  );
}
