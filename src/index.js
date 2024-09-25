import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import WishListProvider from "./providers/wishListProvider";
import router from "./pages/routes/routes";

import "./i18n.js"; // Magic Ball component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishListProvider>
    <RouterProvider router={router} />
  </WishListProvider>
);
