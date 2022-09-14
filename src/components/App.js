import GlobalStyle from "../styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "../contexts/UserContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>First page</>} />
          </Routes>
        </BrowserRouter>
      </UserStorage>
    </>
  );
}
