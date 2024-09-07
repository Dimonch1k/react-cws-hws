import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
