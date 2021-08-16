import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo-github.png';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
return ( 
  <div className="header__container">
    <img className="header__logo" src={logo}></img>
    <nav className="header__nav">
        <NavLink 
          className="header__nav__navlink"
          activeClassName="header__nav__navlink__select"
          to="/Search"
          exact>
        Recherche
        </NavLink>
        <NavLink 
        className="header__nav__navlink"
        activeClassName="header__nav__navlink__select"
        to="/FAQ"
        exact>
        FAQ
        </NavLink>
    </nav>
   </div>
);
}
export default Header

