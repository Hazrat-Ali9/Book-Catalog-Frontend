import React from "react";
import { searchTermChanged } from "../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { useMatch, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const { searchTerm } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const isHomePage = useMatch("/");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isHomePage) {
      navigate("/");
    }
    dispatch(searchTermChanged(e.target.value));
  };

  console.log(searchTerm);

  return (
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-24 md:w-auto"
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
