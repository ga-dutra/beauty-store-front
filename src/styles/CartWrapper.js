import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 67px;
  height: 67px;
  background-color: #efecf0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
`;

const Img = styled.img`
  width: 44px;
  height: 56px;
  position: absolute;
  top: 6px;
  left: 12px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56px;
  width: 150px;
`;

const ItemTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #000000;
`;

const ItemDescription = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #757575;
`;

const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #01214f;
`;

const ItemsQuantity = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 1px solid #ff8e97;
  color: #ff8e97;
  border-radius: 50%;
`;

const Quantity = styled.div``;

const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #ff8e97;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 50%;
`;

export {
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
};
