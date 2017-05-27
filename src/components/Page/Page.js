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
import s from './Page.css';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';  


class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}> 
          <div className="row">
            <Col xs={12} md={8} >
              <h1>{title}</h1>
              <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
              />

            </Col>
            <Col xs={0} md={4} className={classNames("hidden-sm-down ",s.sidebar)}>
              <span>sidebar</span>
            </Col> 
          </div>
        </div>
      </div> 
    );
  }
}

export default withStyles(s)(Page);
