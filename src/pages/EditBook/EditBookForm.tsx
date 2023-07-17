/* eslint-disable @typescript-eslint/no-misused-promises */
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../redux/features/book/bookApi";
import EditBook from "./EditBook";

const EditBookForm = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const { data, isLoading, isError } = useGetBookQuery(bookId);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <div>Error</div>;
  }

  if (!isLoading && !isError && data) {
    const { id, title, author, image, genre, publicationDate, reviews } =
      data.data || {};

    content = (
      <EditBook
        id={id}
        title={title}
        author={author}
        image={image}
        genre={genre}
        publicationDate={publicationDate}
        reviews={reviews}
      />
    );
  }

  return (
    <div className="flex h-screen flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Edit Book
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{content}</div>
    </div>
  );
};

export default EditBookForm;
