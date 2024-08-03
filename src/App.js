import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top10AICompanies from "./pages/Top10AICompanies";
import Top10AIStartups from "./pages/Top10AIStartups";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Children } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import SignUpPage from "./pages/auth/sign-up";
import TsoAIPage from "./pages/TsoAI";
import { Button, Flowbite } from "flowbite-react";

function DummyComponent() {
  return <div>Dummy</div>;
}

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth/sign-up", element: <SignUpPage /> },
      {
        path: "/tsoai",
        element: <TsoAIPage />,
      },
      { path: "/dummy", element: <DummyComponent /> },
      {
        path: "/article/top-10-ai-companies",
        element: <Top10AICompanies />,
      },
      {
        path: "/article/top-10-ai-startups",
        element: <Top10AIStartups />,
      },
    ],
  },
]);

export const customTheme = {
  button: {
    color: {
      info: "text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
    },
  },
  spinner: {
    color: {
      info: "fill-gray-900",
    },
  },
};

function App() {
  return (
    <Flowbite theme={customTheme}>
      <RouterProvider router={router} />
    </Flowbite>
  );
}

export default App;
