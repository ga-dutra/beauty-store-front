import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import {
  Item,
  ImgWrapper,
  Img,
  DescriptionWrapper,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemsQuantity,
  Minus,
  Quantity,
  Plus,
} from "../../styles/CartWrapper.js";

export default function ItemsInCart(cartList) {
  const { cart } = useContext(UserContext);
  const [counter, setCounter] = useState(0);

  //   function increment() {
  //     setCounter(counter + 1);
  //   }
  //   function decrement() {
  //     setCounter(counter - 1);
  //   }

  return cart.map((item) => (
    <Item>
      <ImgWrapper>
        <Img src={item.img}></Img>
      </ImgWrapper>
      <DescriptionWrapper>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
        <ItemPrice>R$ {item.price}</ItemPrice>
      </DescriptionWrapper>
      {/* <ItemsQuantity>
        <Minus onClick={decrement}>-</Minus>
        <Quantity>{counter}</Quantity>
        <Plus onClick={increment}>+</Plus>
      </ItemsQuantity> */}
    </Item>
  ));
}
