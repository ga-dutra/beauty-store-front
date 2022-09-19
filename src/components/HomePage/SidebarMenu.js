import { useContext, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function SidebarMenu() {
  const { sideMenu, setSideMenu } = useContext(ProductsContext);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  function logout() {
    if (window.confirm("Tem certeza de que deseja sair?")) {
      setToken("");
      navigate("/sign-in");
    }
  }

  return (
    <SidebarWrapper>
      <div>
        <div>
          <ion-icon name="person-circle"></ion-icon>
          <p>PERFIL</p>
        </div>
        <div onClick={() => setShowContact(!showContact)}>
          <ion-icon name="logo-instagram"></ion-icon>
          <p>{showContact ? "@beautyshop" : "CONTATO"}</p>
        </div>
        <div>
          <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
          <p onClick={logout}>LOGOUT</p>
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
  width: 260px;
  height: 280px;
  background-image: linear-gradient(#ffd3b6, #ffaba6);
  overflow: visible;
  border-radius: 100px;

  > div {
    position: absolute;
    z-index: 5;
    top: 140px;
    right: 88px;
    height: 102px;
    width: 140px;
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
    font-size: 18px;
    word-wrap: break-word;
    word-break: break-all;
  }

  > ion-icon {
    cursor: pointer;
    position: absolute;
    z-index: 5;
    top: 86px;
    right: 192px;
    font-size: 40px;
    color: #ffffff;
  }
`;
