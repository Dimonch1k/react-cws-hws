import { NavLink, useLocation } from "react-router-dom";
import { House, Space } from "lucide-react";
import "../../styles/components/header/Header.scss";
import { useContext } from "react";

const Header = () => {
  // const location = useLocation();
  // const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <NavLink to="/">
          <House />
        </NavLink>
        <NavLink to="todo">Todo List</NavLink>
        <NavLink to="product-list">Product List</NavLink>
        <NavLink to="magic-ball">Magic Ball</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="goods">Goods</NavLink>
      </nav>

      {/* <Space size={"middle"}></Space> */}
    </header>
  );
};

export default Header;
