import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  const authCheck = useAuthCheck();

  if (!authCheck) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RouterProvider router={router} />;
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
