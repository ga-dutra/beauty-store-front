import { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function PriceSelection() {
  const { priceOption, setPriceOption, isWishListClicked } =
    useContext(ProductsContext);

  const priceOptions = [
    { value: "", text: "Ordenar preços", disabled: "disabled selected" },
    { value: "ascending", text: "Menor valor" },
    { value: "descending", text: "Maior valor" },
  ];

  const handleChange = (event) => {
    setPriceOption(event.target.value);
  };

  return (
    <SelectionWrapper isWishListClicked={isWishListClicked}>
      <select value={priceOption} onChange={handleChange}>
        {priceOptions.map((option) => (
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
    </SelectionWrapper>
  );
}

const SelectionWrapper = styled.div`
  width: 50%;
  margin-left: 50vw;
  position: fixed;
  z-index: 3;
  top: 240px;
  display: ${(props) => (props.isWishListClicked ? "none" : "inherit")};
  select {
    height: 40px;
    background-color: #f5f5f5;
    border: 0px;
    font-size: 16px;
    font-weight: 600;
  }

  select:focus {
    outline: none;
  }
`;
