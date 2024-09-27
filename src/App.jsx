import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/header/Header";
import WishListProvider from "./providers/wishListProvider.jsx";

import { pageStyles, outletStyles } from "./styles/appStyles.js";

function App() {
  return (
    <div style={pageStyles}>
      <WishListProvider>
        <ScrollRestoration />
        <Header />
        <div style={outletStyles}>
          <Outlet />
        </div>
      </WishListProvider>
    </div>
  );
}

export default App;
