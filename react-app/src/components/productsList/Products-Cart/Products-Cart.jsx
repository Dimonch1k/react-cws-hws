import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProductsCart = ({ counter }) => {
  return (
    <>
      <NavLink to="/wish-list">
        <div className="shopping-cart">
          <div className="shopping-cart__basket">
            <ShoppingCart color="black" />
            <div className="shopping-cart__counter">
              <span>{counter}</span>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default ProductsCart;
