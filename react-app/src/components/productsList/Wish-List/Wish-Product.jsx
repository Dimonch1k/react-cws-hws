import React, { useState } from "react";

import "../../../styles/components/productList/Product-Item/Product-Item.scss";
import "../../../styles/components/productList/Wish-List/Wish-Product.scss";
import classNames from "classnames";
import { IoIosClose } from "react-icons/io";

const ProductItem = ({ product, removeFromWishList }) => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(true);
  const toggleHover2 = () =>
    setTimeout(() => {
      setHovered(false);
    }, 400);

  return (
    <ul className="product">
      <div className="product__remove">
        <IoIosClose
          fill="red"
          className="product__remove-btn"
          onClick={() => removeFromWishList(product)}
        />
      </div>

      <li className="product__item product__image">
        <img src={product.image} alt="product-image" />
      </li>

      <div onMouseEnter={toggleHover} onMouseLeave={toggleHover2}>
        <li className="product__item product__info">{product.info}</li>

        <li
          className="product__item product__expire"
          style={{ color: product.expire ? "#ff5c00" : "#00a046" }}
        >
          {product.expire ? "Expires" : "In stock"}
        </li>
        <li className="product__item product__price">{product.price}₴</li>
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
