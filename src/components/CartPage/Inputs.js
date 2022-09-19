import { useContext, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Inputs() {
  const paymentOptions = [
    {
      value: "",
      text: "Pagamento (somente na entrega)",
      disabled: "disabled selected",
    },
    { value: "creditCard", text: "Cartão de crédito" },
    { value: "debitCard", text: "Cartão de débito" },
    { value: "money", text: "Dinheiro" },
  ];
  const [paymentOption, setPaymentOption] = useState(paymentOptions[0].value);
  const { setIsOrderValiable } = useContext(ProductsContext);

  const handleChange = (event) => {
    setPaymentOption(event.target.value);
    setIsOrderValiable(true);
  };

  return (
    <InputsWrapper>
      <input
        placeholder="Endereço de entrega"
        onChange={(e) => {
          if (e !== "") {
            setIsOrderValiable(true);
          } else setIsOrderValiable(false);
        }}
      />
      <select onChange={handleChange} value={paymentOption}>
        {paymentOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {" "}
            {option.text}
          </option>
        ))}
      </select>
      <ion-icon name="chevron-down-outline"></ion-icon>
    </InputsWrapper>
  );
}

const InputsWrapper = styled.div`
  margin-top: 30px;
  width: 90vw;
  position: relative;

  input,
  select {
    background-color: #ffffff;
    width: 100%;
    height: 52px;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 43px;
    /* border: ${(props) => (props.isInvalid ? "1px solid red" : "none")}; */
    border: none;
    /* background-color: ${(props) =>
      props.isInvalid ? "#F2DEDE" : "#F5F5F5"}; */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
  }

  select {
    margin-right: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input:focus,
  select:focus {
    outline: none;
  }

  input,
  input::placeholder,
  select {
    color: #757575;
    font-size: 14px;
    font-weight: 600;
    position: relative;
  }

  ion-icon {
    position: absolute;
    top: 84px;
    right: 16px;
    font-size: 24px;
  }
`;
