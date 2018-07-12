import React from 'react';
import './About.css';
import texts from './../../helper/texts';

export class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <h3>About</h3>
        <p>{texts.about}</p>
      </div>
    );
  }
}
