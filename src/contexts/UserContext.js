import { createContext, useState } from "react";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ userData, setUserData, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserStorage, UserContext };
