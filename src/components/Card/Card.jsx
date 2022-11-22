import React from 'react'
import classes from "./Card.module.scss"
import Plus from "../../images/content/card/plus.svg"
import Sneakers1 from "../../images/sneakers/nike_green.jpg"
import Favorite from "../../images/content/card/favorite.jpg"
const Card = (props) => {
  return (
    <div className={classes.card}>
      <button className={classes.button}>
        <img src={Favorite} alt="Save Sneakers to favorite" />
      </button>
      <img src={Sneakers1} width={133} height={112} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={classes.card_footer}>
        <div className={classes.card_price}>
          <span>Price:</span>
          <b>{props.price}$</b>
        </div>
        <button className={classes.button}>
          <img src={Plus} width={11} height={11} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card