import React, { useContext, useState } from "react";
import classes from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import { AppContext } from "../../App";


const Card = ({id, imageUrl, title, price, onFavorite, onPlus, favorite = false, added = false, loading=false  }) => {

  const {isItemAdded} = useContext(AppContext);


  // const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorite);

  // console.log(title, added)
  const onClickFavorite = () => {
    onFavorite({id, title, price, imageUrl});
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus({id, title, price, imageUrl});
    // setIsAdded(!isAdded);
    
  };


  return (
    <div className={classes.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={250}
          height={280}
          viewBox="0 0 260 210"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="170" height="100" />
          <rect x="0" y="110" rx="10" ry="10" width="170" height="25" />
          <rect x="0" y="140" rx="10" ry="10" width="93" height="20" />
          <rect x="0" y="178" rx="8" ry="8" width="71" height="22" />
          <rect x="140" y="178" rx="11" ry="11" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              width={11}
              height={11}
              alt="plus"
            />
          </div>
          {  console.log(title, isItemAdded(title))}
        </>
      )}
    </div>
  );
};

export default Card;
