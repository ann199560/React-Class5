import { createHashRouter } from "react-router";
import FrontendLayout from "./layout/FrontendLayout";
import Home from "./views/Front/Home";
import Products from "./views/Front/Products";
import SingleProduct from "./views/Front/SingleProduct";
import Cart from "./views/Front/Cart";
import NotFound from "./views/Front/NotFound";

// 建立路由表（裡面放陣列物件）
export const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
