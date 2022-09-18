import { useContext } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function SidebarMenu() {
  const { sideMenu, setSideMenu } = useContext(ProductsContext);

  return (
    <SidebarWrapper>
      <div>
        <div>
          <ion-icon name="person-circle"></ion-icon>
          <p>PERFIL</p>
        </div>
        <div>
          <ion-icon name="mail-outline"></ion-icon>
          <p>CONTATO</p>
        </div>
        <div>
          <ion-icon name="log-out-outline"></ion-icon>
          <p>LOGOUT</p>
        </div>
      </div>
      <ion-icon onClick={() => setSideMenu(!sideMenu)} name="menu"></ion-icon>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  position: fixed;
  top: -80px;
  right: -80px;
  z-index: 5;
  width: 230px;
  height: 280px;
  background-image: linear-gradient(#ffd3b6, #ffaba6);
  overflow: visible;
  border-radius: 100px;

  > div {
    position: absolute;
    z-index: 5;
    top: 140px;
    right: 88px;
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div div {
    display: flex;
    align-items: center;
  }

  div div ion-icon {
    color: #ffffff;
    font-size: 22px;
    padding-right: 6px;
  }

  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 19px;
  }

  > ion-icon {
    cursor: pointer;
    position: absolute;
    z-index: 5;
    top: 86px;
    right: 176px;
    font-size: 40px;
    color: #ffffff;
  }
`;
