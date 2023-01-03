import React from "react";
import classes from "./Basket.module.scss";
import Vector from "../../images/content/Vector.svg";
import Arrow from "../../images/content/arrow.svg";
import EmptyBasket from "../../images/content/empty-basket.png";

const Basket = ({ onDelete, onClose, items = [] }) => {
console.log(items);
  return (
    <div>
      <div className={classes.overlay}>
        <div className={classes.right_wrapper}>
          <div className={classes.header_basket}>
            <h2>Basket</h2>
            <button onClick={onClose} className={classes.button}>
              <img src={Vector} alt="Close" />
            </button>
          </div>

          {
            items.length > 0 ? (
              <div className={classes.content}>
            <div  className={classes.items}>
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
                  {items.map((obj) => (
                    <b>{obj.price}$</b>
                  ))}
                </li>
                <li>
                  <span>Charge 10%:</span>
                  <div></div>
                  <b>4$</b>
                </li>
              </ul>
              <button className={classes.green_btn}>
                Pay now <img className={classes.img_right} src={Arrow} alt="Arrow" />
              </button>
            </div>
          </div>
            ) : (
              <div className={classes.empty_basket}>
            <img src={EmptyBasket} alt="Empty Basket" />
            <h3>Empty Basket</h3>
            <p>Please, add though one pair of sneakers</p>
            <button onClick={onClose} style={{ width: "300px" }} className={classes.green_btn}>
              <img className={classes.img_left} src={Arrow} alt="Arrow" /> go
              back
            </button>
          </div>
            )
          }



          
        </div>
      </div>
    </div>
  );
};

export default Basket;
