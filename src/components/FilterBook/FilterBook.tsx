import { Filter, filterChanged } from "../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";

const FilterBook = () => {
  const { filter } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const handleFilter = (filter: Filter) => {
    dispatch(filterChanged(filter));
  };

  return (
    <div className="flex justify-center gap-x-10 mb-10">
      <div className="btn-group">
        <button
          onClick={() => handleFilter("all")}
          className={`btn ${filter === "all" ? "btn-active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("fiction")}
          className={`btn ${filter === "fiction" ? "btn-active" : ""}`}
        >
          Fiction
        </button>
        <button
          onClick={() => handleFilter("novel")}
          className={`btn ${filter === "novel" ? "btn-active" : ""}`}
        >
          Novel
        </button>
        <button
          onClick={() => handleFilter("historical")}
          className={`btn ${filter === "historical" ? "btn-active" : ""}`}
        >
          Historical
        </button>
      </div>
    </div>
  );
};

export default FilterBook;
