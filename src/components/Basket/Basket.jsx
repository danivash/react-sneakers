import React, { useContext, useState } from "react";
import classes from "./Basket.module.scss";
import Vector from "../../images/content/Vector.svg";
import { useBasket } from "../../hooks/useBasket";
import Info from "../Info/Info";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const Basket = ({ onDelete, onClose, items=[], opened}) => {

const {totalPrice, basketItems, setBasketItems} = useBasket();
const [isOrderComplete, setIsOrderComplete] = useState(false)
console.log(basketItems);

const onClickOrder = async () => {
  setIsOrderComplete(true);
  setBasketItems([]);

  for (let i = 0; i < basketItems.length; i+= 1) {
    const item = basketItems[i];
    await axios.delete('https://63813898786e112fe1c51691.mockapi.io/basket/' + item.id);
    await delay(1000);
  }
  // basketItems.map((item) => onDelete(Number(item.id)));
}
      // const calculationPrice = (items, isTotalPrice) => {
      //   const arrWithPrice = items.map((obj) => obj.price);
      //   let price = arrWithPrice.reduce(
      //     (accumulator, currentValue) => accumulator + currentValue
      //   );
      //   let charge = Math.floor(price / 10);
      //   let totalPrice = price + charge;
      //   return isTotalPrice ? totalPrice : charge;
      // };
  return (
      <div className={`${classes.overlay} ${opened && classes.overlayVisibility}`} onClick={onClose}>
        {/* Прекращает дальнейшую передачу текущего события  */}
        <div
          className={classes.right_wrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.header_basket}>
            <h2>Basket</h2>
            <button onClick={onClose} className={classes.button}>
              <img src={Vector} alt="Close" />
            </button>
          </div>

          {items.length > 0 ? (
            <div className={classes.content}>
              <div className={classes.items}>
                {items.map((obj, index) => (
                  <div key={index} className={classes.basketItem}>
                    <img
                      width={70}
                      height={70}
                      src={obj.imageUrl}
                      alt="Sneakers"
                    />
                    <div style={{ marginLeft: "15px" }}>
                      <p>{obj.title}</p>
                      <b>{obj.price}$</b>
                    </div>
                    <button
                      onClick={() => onDelete(obj.id)}
                      className={classes.button}
                    >
                      <img src={Vector} alt="Delete" />
                    </button>
                  </div>
                ))}
              </div>

              <div className={classes.order}>
                <ul>
                  <li>
                    <span>Total:</span>
                    <div></div>
                    <b>
                      {totalPrice}$
                    </b>
                  </li>
                  <li>
                    <span>Charge 10%:</span>
                    <div></div>
                    <b>
                      {Math.floor(totalPrice * 0.1)}$
                    </b>
                  </li>
                </ul>
                <button className={classes.green_btn} onClick={onClickOrder}>
                  Pay now{" "}
                  <img className={classes.img_right} src={'/img/arrow.svg'} alt="Arrow" />
                </button>
              </div>
            </div>
          ) : (
            <Info title={isOrderComplete ? "Your Order is complete!" : "Empty Basket"} description={isOrderComplete ? `Thank you for purchase for ${totalPrice}$` : "Please, add though one pair of sneakers"} imageContent={isOrderComplete ? "/img/complete-order.png" : "/img/empty-basket.png"}/>
          )}
        </div>
      </div>
  );
};

export default Basket;
