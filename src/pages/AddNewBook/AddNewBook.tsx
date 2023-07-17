/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useAddBookMutation } from "../../redux/features/book/bookApi";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddNewBook = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [publicationDate, setPublicationDate] = useState<string>("");
  const [reviews, setReviews] = useState<number>(0);

  const navigate = useNavigate();

  const [addBook] = useAddBookMutation();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await addBook({
        title,
        author,
        image,
        genre,
        publicationDate,
        reviews,
      }).unwrap();

      toast.success("Successfully Book Added!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add New Book
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Author
            </label>
            <div className="mt-2">
              <input
                id="author"
                name="author"
                type="text"
                autoComplete="author"
                placeholder="Book Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Image URL
            </label>
            <div className="mt-2">
              <input
                id="image"
                name="image"
                type="text"
                autoComplete="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Book Image Name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Book Genre
              </label>
            </div>
            <div className="mt-2">
              <select
                className="select select-bordered w-full"
                value={genre}
                onChange={(e) =>
                  setGenre(capitalizeFirstLetter(e.target.value))
                }
              >
                <option disabled selected>
                  Select
                </option>
                <option>Fiction</option>
                <option>Historical</option>
                <option>Novel</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Publication Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                id="publicationDate"
                name="publicationDate"
                value={publicationDate}
                onChange={(e) => setPublicationDate(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Book Reviews
            </label>
            <div className="mt-2">
              <input
                id="reviews"
                name="reviews"
                type="number"
                placeholder="Book Reviews"
                value={reviews}
                onChange={(e) => setReviews(Number(e.target.value))}
                min={0}
                max={5}
                autoComplete="reviews"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
