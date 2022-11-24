import React from 'react'
import classes from './ButtonInCard.module.scss'
import Check from '../../../images/content/card/check.svg'




const BtnAfterOrder = () => {
  return (
    <button className={classes.btn_afterOrder}>
        <img src={Check} width={11} height={11} alt="Added to price" />
    </button>
  )
}

export default BtnAfterOrder