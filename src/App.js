import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top10AICompanies from "./pages/Top10AICompanies";
import Top10AIStartups from "./pages/Top10AIStartups";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Children } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";

function DummyComponent() {
  return <div>Dummy</div>;
}

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUpPage /> },
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
