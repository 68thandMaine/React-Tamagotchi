import React from 'react';
import PropTypes from 'prop-types';


export default function GameStats(props){
  const wrapperStyles={
    color: 'white'
  }
  return(
    <div >
      <p style={wrapperStyles}>Hunger: {props.hunger}</p>
      <p style={wrapperStyles}>Name: {props.name} </p>
    </div>
  );
}

GameStats.propTypes = {
  name: PropTypes.string.isRequired
}
