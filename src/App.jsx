import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Error,
  HomeLayout,
} from "./pages";

import { ErrorElement } from "./components";

// actions

import ProductPage from "./pages/ProductPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5 mins
    },
  },
});

const router = new createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <ProductPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <Error />
  },
  {
    path: "/register",
    element: <SignUp />,
    errorElement: <Error />
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
