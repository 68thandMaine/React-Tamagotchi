import React from 'react';
import PropTypes from 'prop-types';

export default function ControlButtons(props){


  const buttonStyles={
    border:'solid blue 1px',
    borderRadius: '50%',
    padding: '10px',
    margin: '10px',
    height: '50px',
    width: '100px'
  }

  function feedIt(){
    props.onFeedingTamagotchi();
  }

  return(
    <div>
      <button onClick={feedIt} style={buttonStyles}>Feed</button>
    </div>
  );
}
