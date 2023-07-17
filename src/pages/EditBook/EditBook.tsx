/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useState } from "react";
import { useEditBookMutation } from "../../redux/features/book/bookApi";
import toast from "react-hot-toast";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { useNavigate } from "react-router-dom";

interface EditBookProps {
  id: string;
  title: string;
  author: string;
  image: string;
  genre: string;
  publicationDate: string;
  reviews: number;
}

const EditBook = ({
  id,
  title: initialTitle,
  author: initialAuthor,
  image: initialImage,
  genre: initialGenre,
  publicationDate: initialPublicationDate,
  reviews: initialReviews,
}: EditBookProps) => {
  const [title, setTitle] = useState<string>(initialTitle);
  const [author, setAuthor] = useState<string>(initialAuthor);
  const [image, setImage] = useState<string>(initialImage);
  const [genre, setGenre] = useState<string>(initialGenre);
  const [publicationDate, setPublicationDate] = useState<string>(
    initialPublicationDate
  );
  const [reviews, setReviews] = useState<number>(initialReviews);
  const [editBook] = useEditBookMutation();

  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      await editBook({
        id,
        title,
        author,
        image,
        genre,
        publicationDate,
        reviews,
      }).unwrap();

      toast.success("Book Edited successfully!");
      navigate(-1);
    } catch (error) {
      toast.error(
        "Something went wrong while Edit the book. Please try again later."
      );
    }
  };

  return (
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
            onChange={(e) => setGenre(capitalizeFirstLetter(e.target.value))}
          >
            <option disabled selected>
              Mystery
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
          Edit Book
        </button>
      </div>
    </form>
  );
};

export default EditBook;
