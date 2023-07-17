import Card from "../../components/Card/Card";
import FilterBook from "../../components/FilterBook/FilterBook";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/features/hooks";

const Home = () => {
  const { filter, searchTerm } = useAppSelector((state) => state.filter);
  const { data, isLoading, isError } = useGetBooksQuery(searchTerm);
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Error</div>;
  } else if (!isLoading && !isError && data) {
    if (filter !== "all") {
      content = data.data
        .filter((book) =>
          book.genre.toLowerCase().includes(filter.toLowerCase())
        )
        .map((book) => <Card key={book.id} book={book} />);
    } else {
      content = data.data.map((book) => <Card key={book.id} book={book} />);
    }
  }

  return (
    <div className="flex flex-col gap-x-5 justify-between">
      <FilterBook />
      <div className="grid grid-cols-3 gap-5">{content}</div>
    </div>
  );
};

export default Home;
