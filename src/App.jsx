import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/header/Header";
import WishListProvider from "./providers/wishListProvider.jsx";

function App() {
  return (
    <>
      <WishListProvider>
        <ScrollRestoration />
        <Header />
        <Outlet />
      </WishListProvider>
    </>
  );
}

export default App;
