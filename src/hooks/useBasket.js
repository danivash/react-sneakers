import React, { useContext } from "react";
import { AppContext } from "../App";

export const useBasket = () => {
  const { basketItems} = useContext(AppContext);
  const totalPrice = basketItems.reduce((acc, obj) => acc + obj.price, 0);
  return { totalPrice, basketItems};
};
