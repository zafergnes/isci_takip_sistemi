import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { employer } = useAuth();

  if (!employer) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
