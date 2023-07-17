import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { userLoggedOut } from "../../redux/features/auth/authSlice";
import SearchInput from "../SearchInput/SearchInput";

const Navbar = () => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    localStorage.removeItem("auth");
    dispatch(userLoggedOut());
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Book Catalog
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {" "}
          <div className="form-control">
            <SearchInput />
          </div>
          <li>
            <Link to={"/add-new-book"}>Add New Book</Link>
          </li>
          <li>
            {!accessToken ? (
              <Link to={"/sign-in"}>Sign In</Link>
            ) : (
              <button onClick={handleSignOut}>Sign Out</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
