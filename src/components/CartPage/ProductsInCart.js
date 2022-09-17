import styled from "styled-components";

export default function ProductsInCart() {
  return (
    <Wrapper>
      <ProductImage></ProductImage>
      <ProductInfo></ProductInfo>
      <ProductQtd>
        <div>-</div>
        <div>01</div>
        <div>+</div>
      </ProductQtd>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 67px;
  height: 67px;
  background-color: #efecf0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;

  img {
    width: 44px;
    height: 56px;
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

const ProductInfo = styled.div`
  h1 {
  }
  h2 {
  }
  h3 {
  }
`;
const ProductQtd = styled.div`
  display: flex;
`;
