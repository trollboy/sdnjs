

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css'; 
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo_bar.png?2';
import logoUrl2x from './logo_bar.png?1';
import classNames from 'classnames';  
import Menu from 'react-burger-menu/lib/menus/slide';
import 'bootstrap/dist/css/bootstrap.css';


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '26px',
        height: '25px',
        right: '5px',
        top: '5px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
        bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}; 
var MediaQuery = require('react-responsive');

/*
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    styles.bmBurgerButton.display = 'none';
} 
*/
class Header extends React.Component {   
    
 
  render() {
 
    return (
        <div className={classNames("zindex-navbar",s.root)}>
            <div className={s.container}>
            <Link className={s.brand} to="/">
                <img src={logoUrl} srcSet={`${logoUrl2x} 2x`}  alt="Shoggoth.net" />
            </Link>    
 
            <Menu styles={ styles } className={ " " } pageWrapId={ "page-wrap" } width={ '100%' } outerContainerId={ "outer-container" } right >
                <Link className={s.link} to="/">Home</Link>
                <Link className={s.link} to="/literature">Literature</Link>
                <Link className={s.link} to="/conventions">Conventions</Link>
                <Link className={s.link} to="/editorials">Editorials</Link>
                <Link className={s.link} to="/resources">Resources</Link>
                <Link className={s.link} to="/gaming">Gaming</Link>
                <Link className={s.link} to="/news">News</Link>
                <Link className={s.link} to="/about">About</Link> 
                <span className={s.spacer}> | </span>
                <Link className={s.link} to="/login">Log in</Link>
                <span className={s.spacer}>or</span>
                <Link className={classNames(s.link, s.highlight)} to="/register">Sign up</Link>
            </Menu> 
            <Navigation /> 
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);
