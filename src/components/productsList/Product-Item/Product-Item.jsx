import React, { useState } from "react";

import "../../../styles/components/productList/Product-Item/Product-Item.scss";
import classNames from "classnames";
import { Heart } from "lucide-react";

const ProductItem = ({ image, info, price, expire, more, gridRows }) => {
  const [favorite, setFavorite] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleFavorite = () => setFavorite(!favorite);
  const toggleHover = () => setHovered(true);
  const toggleHover2 = () =>
    setTimeout(() => {
      setHovered(false);
    }, 400);

  return (
    <ul className="product">
      <div className="heart">
        <Heart
          fill={favorite ? "red" : "white"}
          stroke={favorite ? "red" : "black"}
          onClick={toggleFavorite}
        />
      </div>
      <div
        className={classNames("product__content", {
          "inline-content": gridRows,
        })}
      >
        <li className="product__item product__image">
          <img src={image} alt="product-image" />
        </li>

        <div
          className={classNames({ "grid-rows-info": gridRows })}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover2}
        >
          <li className="product__item product__info">{info}</li>

          <li
            className=" product__item product__expire"
            style={{ color: expire ? "#ff5c00" : "#00a046" }}
          >
            {expire ? "Expires" : "In stock"}
          </li>
          <li className="product__item product__price">{price}₴</li>
        </div>
      </div>

      <div className="description">
        <div
          className={classNames("description__hidden", { hidden: !hovered })}
        >
          <p className="description__hidden-inner">
            <span>{more.processor}</span> / <span>{more.ram}</span> /{" "}
            <span>{more.storage}</span> / <span>{more.display}</span>
          </p>
        </div>
      </div>
    </ul>
  );
};

export default ProductItem;
