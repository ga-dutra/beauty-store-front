import { useNavigate } from "react-router-dom";
import checked from "../../assets/img/checked.png";
import { Body, Icon, Text } from "../../styles/CheckoutWrapper.js";

export default function CheckoutPage() {
  const navigate = useNavigate();
  function navigateToMain() {
    setTimeout(() => navigate("/"), 5000);
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
