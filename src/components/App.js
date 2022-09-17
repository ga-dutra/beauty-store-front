import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "../contexts/UserContext";
import { ProductsStorage } from "../contexts/ProductsContext";
import HomePage from "./HomePage/HomePage.js";
import SignInPage from "./SignInPage/SignInPage.js";
import SignUpPage from "./SignUpPage/SignUpPage.js";
import LoginPage from "./LoginPage/LoginPage.js";
import CartPage from "./CartPage/CartPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserStorage>
        <ProductsStorage>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ProductsStorage>
      </UserStorage>
    </>
  );
}
