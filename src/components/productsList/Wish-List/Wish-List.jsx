import WishProduct from "./Wish-Product";
import "../../../styles/pages/goodsList/Goods-List.scss";

import { useContext } from "react";
import { WishListContext } from "../../../providers/wishListProvider";

const WishList = () => {
  const { wishList, removeFromWishList } = useContext(WishListContext);

  return (
    <div className="container">
      <div className="wish-list">
        {wishList.map((product) => (
          <WishProduct
            key={product.id}
            product={product}
            removeFromWishList={() => removeFromWishList(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;
