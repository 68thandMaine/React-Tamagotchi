import React from 'react';

  export default function NewTamagotchiForm() {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
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
        <button type='submit'>New Game</button>
      </form>
    </div>
  );
}
