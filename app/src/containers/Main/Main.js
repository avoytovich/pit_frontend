import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Main.css';
import { About, Login, Logo } from './../../components';

import Location from './../../containers/location/location';

export class Main extends React.Component {
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} sm={12} md={12}>
            <Logo />
          </Col>
          <Col xs={4} sm={4} md={4}>
            <About />
          </Col>
          <Col xs={8} sm={8} md={8}>
            <Login />
          </Col>
        </Row>
        <Location/>
      </Grid>
    );
  }
}
