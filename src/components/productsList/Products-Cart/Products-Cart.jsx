import { ShoppingCart } from "lucide-react";

const ProductsCart = ({ counter }) => {
  return (
    <>
      <div className="shopping-cart">
        <div className="shopping-cart__basket">
          <ShoppingCart />
          <div className="shopping-cart__counter">
            <span>{counter}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
