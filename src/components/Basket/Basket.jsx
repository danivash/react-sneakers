import React from "react";
import classes from "./Basket.module.scss";
import Vector from "../../images/content/Vector.svg";
import Arrow from "../../images/content/arrow.svg";
import Sneakers from "../../images/sneakers/nike_green.jpg";
const Basket = () => {
  return (
    <div>
      <div className={classes.overlay}>
        <div className={classes.right_wrapper}>
          <div className={classes.header_basket}>
            <h2>Basket</h2>
            <button className={classes.button}>
              <img src={Vector} alt="Remove" />
            </button>
          </div>
          <div className={classes.items}>
            <div className={classes.basketItem}>
              <img width={70} height={70} src={Sneakers} alt="Sneakers" />
              <div style={{ marginLeft: "15px" }}>
                <p>Man Sneakers: Nike Blazer Mid Suede</p>
                <b>45$</b>
              </div>
              <button className={classes.button}>
                <img src={Vector} alt="Remove" />
              </button>
            </div>
            <div className={classes.basketItem}>
              <img width={70} height={70} src={Sneakers} alt="Sneakers" />
              <div style={{ marginLeft: "15px" }}>
                <p>Man Sneakers: Nike Blazer Mid Suede</p>
                <b>45$</b>
              </div>
              <button className={classes.button}>
                <img src={Vector} alt="Remove" />
              </button>
            </div>
          </div>

          <div className={classes.order}>
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>45$</b>
              </li>
              <li>
                <span>Charge 10%:</span>
                <div></div>
                <b>4$</b>
              </li>
            </ul>
            <button className={classes.btn_offer}>
              Pay now <img src={Arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
