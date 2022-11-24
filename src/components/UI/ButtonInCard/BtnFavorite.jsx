import React from 'react'
import classes from './ButtonInCard.module.scss'
import Favorite from '../../../images/content/card/favorite.jpg'




const BtnAfterOrder = () => {
  return (
    <button className={classes.btn_favorite}>
        <img src={Favorite}alt="Save Sneakers to favorite" />
    </button>
  )
}

export default BtnAfterOrder