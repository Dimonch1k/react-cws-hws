import React, { useState } from "react";

import "../../styles/pages/goodsList/Good-Item/Goods-Item.scss";

const Good = ({ image, title, price, count, description }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(true);
  const toggleHover2 = () =>
    setTimeout(() => {
      setHovered(false);
    }, 400);
  return (
    <ul className="good">
      <div className="good__content">
        <li className="good__item good__image">
          <img src={image} alt="good-image" />
        </li>

        <div onMouseEnter={toggleHover} onMouseLeave={toggleHover2}>
          <li className="good__item good__title">{title}</li>
          <li className=" good__item good__count">In stock: {count}</li>
          <li className="good__item good__price">{price}₴</li>
        </div>
      </div>

      <div className="description">
        <div className={`description__hidden ${!hovered && "hidden"}`}>
          <p className="description__hidden-inner">{description}</p>
        </div>
      </div>
    </ul>
  );
};

export default Good;
