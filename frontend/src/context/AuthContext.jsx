import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // İlk başta localStorage'dan oku
  const [employer, setEmployer] = useState(() => {
    const saved = localStorage.getItem("employer");
    return saved ? JSON.parse(saved) : null;
  });

  // Başka bir sekmede login/logout olursa, otomatik güncelle
  useEffect(() => {
    const syncAuth = () => {
      const saved = localStorage.getItem("employer");
      setEmployer(saved ? JSON.parse(saved) : null);
    };
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const login = (data) => {
    setEmployer(data);
    localStorage.setItem("employer", JSON.stringify(data));
  };

  const logout = () => {
    setEmployer(null);
    localStorage.removeItem("employer");
  };

  return (
    <AuthContext.Provider value={{ employer, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
