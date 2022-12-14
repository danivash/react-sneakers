import React, { useState } from "react";
import classes from "./Card.module.scss";

const Card = ({id, imageUrl, title, price, onFavorite, onPlus, favorite = false, added = false }) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onClickFavorite = () => {
    onFavorite({id, title, price, imageUrl});
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus({id, title, price, imageUrl});
    setIsAdded(!isAdded);
    
  };

  return (  
    <div className={classes.card}>
      <img
        className={classes.btn}
        onClick={onClickFavorite}
        src={
          isFavorite
            ? "/img/btn-favorite-enabled.png"
            : "/img/btn-favorite-disabled.png"
        }
        alt="Save Sneakers to favorite"
      />
      <img src={imageUrl} width={133} height={112} alt="Sneakers" />
      <h5>{title}</h5>
      <div className={classes.card_footer}>
        <div className={classes.card_price}>
          <span>Price:</span>
          <b>{price}$</b>
        </div>
        <img
          className={classes.btn}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          width={11}
          height={11}
          alt="plus"
        />
      </div>
    </div>
  );
};

export default Card;
