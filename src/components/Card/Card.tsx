import { Link } from "react-router-dom";
import { IBook } from "../../redux/features/book/book.interface";

const Card = ({ book }: { book: IBook }) => {
  const { id, title, author, image, genre, publicationDate } = book || {};

  return (
    <Link to={`/books/${id}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-64 object-cover w-full" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{genre}</div>
          </h2>
          <div className="card-actions justify-between">
            <div className="">
              <span className="font-semibold">Author:</span> {author}
            </div>
            <div className="badge badge-outline">{publicationDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
