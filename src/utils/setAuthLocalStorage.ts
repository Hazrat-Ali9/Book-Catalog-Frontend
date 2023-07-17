import { AppDispatch } from "../redux/app/store";
import { IAuthSlice } from "../redux/features/auth/auth.interface";
import { userLoggedIn } from "../redux/features/auth/authSlice";

export const setLocalStorageUser = ({
  updatedData,
  dispatch,
}: {
  updatedData: Partial<IAuthSlice>;
  dispatch: AppDispatch;
}) => {
  const localAuth = localStorage?.getItem("auth");
  if (localAuth) {
    const auth = JSON.parse(localAuth) as IAuthSlice;
    if (auth.user) {
      const newUpdatedAuth: IAuthSlice = {
        ...auth,
        user: {
          ...auth.user,
          ...updatedData,
        },
      };
      localStorage.setItem("auth", JSON.stringify(newUpdatedAuth));
      dispatch(userLoggedIn(newUpdatedAuth));
    }
  }
};
