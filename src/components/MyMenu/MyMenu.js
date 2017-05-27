
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyMenu.css';
import Link from '../Link';  
import classNames from 'classnames';  
import Menu from 'react-burger-menu/lib/menus/slide'
 
class MyMenu extends React.Component {
  showSettings (event) {
    event.preventDefault(); 
  }
 
  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
