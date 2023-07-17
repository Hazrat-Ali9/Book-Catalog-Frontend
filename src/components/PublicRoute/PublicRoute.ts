import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      return;
    }
  }, [isLoggedIn, navigate]);

  return children;
}
