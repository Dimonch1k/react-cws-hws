import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Home from "../../pages/home/home";
import TodoList from "../../components/todoList/Todo-List";
import ProductList from "../../components/productsList/Products-List";
import WishList from "../../components/productsList/Wish-List/Wish-List";
import MagicBall from "../../components/magicBall/Magic-Ball";

import Users from "../users/Users";
import User from "../users/User";
import { getUsers, getUser } from "../../loaders/usersLoaders";
import Goods from "../goods/Goods";
import Good from "../goods/Good";
import { getGoods, getGood } from "../../loaders/goodsLoaders";
import Posts from "../../components/serverPosts/Posts";
import PostDetail from "../../components/serverPosts/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/todo",
        element: <TodoList />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
      {
        path: "/magic-ball",
        element: <MagicBall />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: getUsers,
        children: [
          {
            path: ":id" /* users/:id */,
            element: <User />,
            loader: getUser,
          },
        ],
      },
      {
        path: "/goods",
        element: <Goods />,
        loader: getGoods,
        children: [
          {
            path: ":id",
            element: <Good />,
            loader: getGood,
          },
        ],
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
