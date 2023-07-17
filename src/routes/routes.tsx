import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Layout from "../components/Layout/Layout";
import AddNewBook from "../pages/AddNewBook/AddNewBook";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import PublicRoute from "../components/PublicRoute/PublicRoute";
import BookDetails from "../pages/BookDetails/BookDetails";
import EditBook from "../pages/EditBook/EditBookForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <div>Not found!</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
      },
      {
        path: "/edit-book/:bookId",
        element: <EditBook />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
]);

export default router;
