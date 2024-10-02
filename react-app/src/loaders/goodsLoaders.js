import axios from "axios";

// Fetch data from an API

export const getGoods = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products/");
  return data;
};

export const getGood = async ({ params }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );
  return data;
};
