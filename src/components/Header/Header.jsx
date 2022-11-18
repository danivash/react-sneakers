import React from 'react'
import classes from './Header.module.scss'
import logo from '../../images/header/logo.png'
import basket from '../../images/header/Group.svg'
import favorite from '../../images/header/favorite.png'
import profile from '../../images/header/profile.svg'

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <div className={classes.left_wrapper}>
          <img src={logo} className="logo"></img>
          <div className={classes.left_wrapper__tagline}>
            <h2>REACT SNEAKERS</h2>
            <p>The best store sneakers</p>
          </div>
        </div>
        <ul>
          <li>
            <a>
              <img src={basket} alt="my offer" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={favorite} alt="my favorite" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={profile} alt="my profile" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header