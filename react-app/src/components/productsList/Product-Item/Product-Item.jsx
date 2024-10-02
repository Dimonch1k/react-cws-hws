import React, { useState } from "react";

import "../../../styles/components/productList/Product-Item/Product-Item.scss";
import classNames from "classnames";
import { Heart } from "lucide-react";

const ProductItem = ({ product, gridRows, toggleFavorite }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(true);
  const toggleHover2 = () =>
    setTimeout(() => {
      setHovered(false);
    }, 400);

  const openProduct = (product) => {};

  return (
    <ul className="product" onClick={() => openProduct(product)}>
      {product.like !== null && (
        <div className="heart">
          <Heart
            fill={product.like ? "red" : "white"}
            stroke={product.like ? "red" : "black"}
            onClick={toggleFavorite}
          />
        </div>
      )}
      <div
        className={classNames("product__content", {
          "inline-content": gridRows,
        })}
      >
        <li className="product__item product__image">
          <img src={product.image} alt="product-image" />
        </li>

        <div
          className={classNames({ "grid-rows-info": gridRows })}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover2}
        >
          <li className="product__item product__info">{product.info}</li>

          <li
            className="product__item product__expire"
            style={{ color: product.expire ? "#ff5c00" : "#00a046" }}
          >
            {"Expires" ? "Expires" : "In stock"}
          </li>
          <li className="product__item product__price">{product.price}₴</li>
        </div>
      </div>
      <div className="description">
        <div
          className={classNames("description__hidden", { hidden: !hovered })}
        >
          <p className="description__hidden-inner">
            <span>{product.more.processor}</span> /{" "}
            <span>{product.more.ram}</span> /{" "}
            <span>{product.more.storage}</span> /{" "}
            <span>{product.more.display}</span>
          </p>
        </div>
      </div>
    </ul>
  );
};

export default ProductItem;
