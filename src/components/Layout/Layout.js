/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Menu from 'react-burger-menu/lib/menus/slide';
import 'bootstrap/dist/css/bootstrap.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div id="outer-container">
        <Header />
          <main id="page-wrap">
        {this.props.children}
          </main>

        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
 