import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.js";
import {
  Item,
  ImgWrapper,
  Img,
  DescriptionWrapper,
  ItemTitle,
  ItemDescription,
  ItemPrice
} from "../../styles/CartWrapper.js";

export default function ItemsInCart(cartList) {
  const { cart } = useContext(UserContext);

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
    </Item>
  ));
}
