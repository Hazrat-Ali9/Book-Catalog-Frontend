import { useAppSelector } from "../redux/features/hooks";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);

  if (auth?.accessToken) {
    return true;
  } else {
    return false;
  }
}
