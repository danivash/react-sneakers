import React, { useState } from 'react'
import classes from "./Card.module.scss"
import Plus from "../../images/content/card/plus.svg"
import Favorite from "../../images/content/card/favorite.jpg"
import BtnBeforeOrder from '../UI/ButtonInCard/BtnBeforeOrder'
import BtnAfterOrder from '../UI/ButtonInCard/BtnAfterOrder'
import BtnFavorite from '../UI/ButtonInCard/BtnFavorite'

const Card = (props) => {
  
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className={classes.card}>
        <img className={classes.btn} src="/img/btn-favorite-disabled.png" alt="Save Sneakers to favorite" />
      <img src={props.imageUrl} width={133} height={112} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className={classes.card_footer}>
        <div className={classes.card_price}>
          <span>Price:</span>
          <b>{props.price}$</b>
        </div>
          <img  className={classes.btn} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} width={11} height={11} alt="plus" />
          {/* <BtnBeforeOrder onClick={onClickPlus} onChange={isAdded }/> */}
      </div>
    </div>
  );
}

export default Card