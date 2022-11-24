import React from 'react'
import classes from './ButtonInCard.module.scss'
import Plus from '../../../images/content/card/plus.svg'
import Favorite from '../../../images/content/card/favorite.jpg'



const BtnBeforeOrder = () => {
  return (
    <button className={classes.btn_beforeOrder}>
        <img src={Plus} width={11} height={11} alt="Plus" />
    </button>
  )
}

export default BtnBeforeOrder