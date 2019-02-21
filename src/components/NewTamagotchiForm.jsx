import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

  export default function NewTamagotchiForm(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onHandleNewTamagotchiToList({name: _name.value, hunger: 10, id: v4() })
    _name.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewTamagotchiFormSubmission}>
        <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}}
          />
        <br/>
        <button type='submit'>New Game</button>
      </form>
    </div>
  );
}

NewTamagotchiForm.propTypes = {
  onHandleNewTamagotchiToList: PropTypes.func.isRequired
}
