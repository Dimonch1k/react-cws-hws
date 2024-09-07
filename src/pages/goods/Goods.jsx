import React from "react";
import { useLoaderData } from "react-router-dom";
import Good from "./Good";

import "../../styles/pages/goodsList/Goods-List.scss";

const Goods = () => {
  const goods = useLoaderData();

  return (
    <div className="container">
      <div className="goods-list">
        {goods.map((good) => (
          <Good
            key={good.id}
            image={good.image}
            title={good.title}
            price={good.price}
            count={good.rating.count}
            description={good.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Goods;
