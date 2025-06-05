import { useAppSelector } from "../redux/features/hooks";
// user auth
export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken) {
    return true;
  } else {
    return false;
  }
}
