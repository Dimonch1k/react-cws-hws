import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import WishListProvider from "./providers/wishListProvider";
import router from "./pages/routes/routes";
import store from "./store/index.js";

import "./i18n.js"; // Magic Ball component
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishListProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </WishListProvider>
);
