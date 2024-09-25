import { NavLink } from "react-router-dom";
import { House } from "lucide-react";
import { useContext, useState } from "react";
import { Button, Space } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

// import { ThemeContext } from "../../providers/themeProvider";
import Auth from "../auth/Auth";

import "../../styles/components/header/Header.scss";

const Header = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const current = theme === "light" ? "dark" : "light";
    setTheme(current);
    // document.body.className = `theme-${current}`;
  };

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

      <Space size={"small"} style={{ marginLeft: "auto" }}>
        <Button
          type="primary"
          shape="circle"
          icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
        />

        <Auth />
      </Space>
    </header>
  );
};

export default Header;
