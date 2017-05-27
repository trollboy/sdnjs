/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

var cssClasses = 's.root hidden-md-down';

class Navigation extends React.Component {

  showSettings (event) {
    event.preventDefault();
  };
  render() {
    return (
        <div className={cssClasses} role="navigation">
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
          <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
        </div>
    );
  }
}

export default withStyles(s)(Navigation);
