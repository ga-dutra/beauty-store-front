import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "../contexts/UserContext";
import { ProductsStorage } from "../contexts/ProductsContext";
import HomePage from "./HomePage/HomePage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserStorage>
        <ProductsStorage>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </ProductsStorage>
      </UserStorage>
    </>
  );
}
