import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './Logo.css';

export class Logo extends React.Component {
  render() {
    return (
      <div id='logo'>
        <Button bsStyle='success'>Sign up</Button>
        <img className='logo' src={require('./../../../assets/sold.png')} alt='logo' />
      </div>
    );
  }
}
