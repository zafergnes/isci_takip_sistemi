import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("employer");
    if (saved) {
      setEmployer(JSON.parse(saved));
    }
  }, []);

  const login = (data) => {
    setEmployer(data);
    sessionStorage.setItem("employer", JSON.stringify(data));
  };

  const logout = () => {
    setEmployer(null);
    sessionStorage.removeItem("employer");
  };

  return (
    <AuthContext.Provider value={{ employer, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
