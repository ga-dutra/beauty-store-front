import { useState } from "react";
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
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter+1);
    }
    function decrement() {
        setCounter(counter-1);
    }

  return (
    cartList.map(item => (
    <Item>
        <ImgWrapper>
            <Img src={item.img}></Img>
        </ImgWrapper>
        <DescriptionWrapper>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemPrice>{item.price}</ItemPrice>
        </DescriptionWrapper>
        <ItemsQuantity>
            <Minus onClick={decrement}>-</Minus>
            <Quantity>{counter}</Quantity>
            <Plus onClick={increment}>+</Plus>
        </ItemsQuantity>
    </Item>
    ))
  );
}
