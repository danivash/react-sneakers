import React, { useContext } from 'react'
import { AppContext } from '../../App'
import classes from './Info.module.scss'
const Info = ({title, imageContent, description}) => {
  const {setBasketOpened} = useContext(AppContext)
  return (
    <div className={classes.empty_content}>
    <img src={imageContent} alt="Empty Basket" style={{height: "120px"}}/>
    <h3>{title}</h3>
    <p>{description}</p>
    <button
      onClick={() => setBasketOpened(false)}
      style={{ width: "300px" }}
      className={classes.green_btn}
    >
      <img className={classes.img_left} src={"/img/arrow.svg"} alt="Arrow" /> go
      back
    </button>
  </div>
  )
}

export default Info