import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
      return;
    }
  }, [isLoggedIn, navigate]);

  return children;
}
