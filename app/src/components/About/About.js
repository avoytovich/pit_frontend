import React, { useState } from 'react';
import './About.css';
import texts from './../../helper/texts';

function About() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='about'>
        <h3>About</h3>
        <p>{texts.about}</p>
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default About;
