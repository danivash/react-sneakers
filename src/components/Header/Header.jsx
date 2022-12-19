import React from 'react'
import classes from './Header.module.scss'
import logo from '../../images/header/logo.png'
import basket from '../../images/header/Group.svg'
import favorite from '../../images/header/favorite.png'
import profile from '../../images/header/profile.svg'
import { Link } from 'react-router-dom'

const Header = ({onClickBasket}) => {
  return (
    <header>
      <div className={classes.header}>
      
        <div className={classes.left_wrapper}>
          <Link to="/">
          <img src={logo} className={classes.logo}></img>
          </Link>
          <div className={classes.left_wrapper__tagline}>
            <h2 style={{fontSize:'18px'}}>REACT SNEAKERS</h2>
            <p style={{fontSize: '16px'}} >The best store sneakers</p>
          </div>
        </div>
        <ul>
          <li onClick={onClickBasket} className={classes.basket}>
              <img src={basket} alt="my offer" />
              <span>{5}$</span>
          </li>
          <li>
            <Link to="/favorites"> 
              <img width={18} height={18} src={favorite} alt="my favorite" />
            </Link>
          </li>
          <li>
            <a href="#">
              <img width={18} height={18} src={profile} alt="my profile" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header