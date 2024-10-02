import { createContext, useState, useCallback, useEffect } from "react";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });
  const [counter, setCounter] = useState(wishList.length);

  const addToWishList = useCallback((productItem) => {
    setWishList((prevWishProducts) => {
      const updatedWishList = [...prevWishProducts, productItem];
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      setCounter(updatedWishList.length);
      return updatedWishList;
    });
  }, []);

  const removeFromWishList = useCallback((productItem) => {
    setWishList((prevWishProducts) => {
      const updatedWishList = prevWishProducts.filter(
        (product) => product.id !== productItem.id
      );
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      setCounter(updatedWishList.length);
      productItem.like = false;
      return updatedWishList;
    });
  }, []);

  useEffect(() => {
    setCounter(wishList.length);
  }, [wishList]);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        counter,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
