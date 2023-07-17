import { useEffect, useState } from "react";
import { userLoggedIn } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/features/hooks";

export default function useAuthCheck() {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const accessToken = JSON.parse(localAuth) as string;

      if (accessToken) {
        dispatch(
          userLoggedIn({
            accessToken: accessToken,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
