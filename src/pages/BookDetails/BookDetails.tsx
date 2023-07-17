/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  useDeleteBookMutation,
  useGetBookQuery,
} from "../../redux/features/book/bookApi";

const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const { data, isError, isLoading } = useGetBookQuery(bookId);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Successfully Book Deleted!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error</div>;
  }

  if (!isLoading && !isError && data) {
    const { title, author, image, genre, id, publicationDate, reviews } =
      data.data || {};

    content = (
      <div>
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {title}
              </h1>
              <p className="mb-8 leading-relaxed">Author: {author}</p>
              <div className="flex gap-x-2">
                <h1 className="font-semibold text-xl">Rating:</h1>
                <div className="rating mb-5">
                  {[...Array(reviews)].map((star, i) => {
                    return (
                      <label key={i}>
                        <input
                          type="radio"
                          name={`rating-1`}
                          className="mask mask-star"
                          checked={false}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <p className="mb-8 leading-relaxed">Genre: {genre}</p>
              <p className="mb-8 leading-relaxed">
                Publication Date: {publicationDate}
              </p>

              <div className="flex justify-center">
                <Link to={`/edit-book/${id}`}>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(bookId as string)}
                  className="ml-4 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={image}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default BookDetails;
