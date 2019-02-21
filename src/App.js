import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTamagotchiForm from './components/NewTamagotchiForm';
import GameStats from './components/GameStats';
import Tamagotchi from './components/Tamagotchi';
import ControlButtons from './components/ControlButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: []
    }
    this.handleNewTamagotchiToList = this.handleNewTamagotchiToList.bind(this);
    this.handleIncrementHunger = this.handleIncrementHunger.bind(this);
  }

  componentDidMount(){
    this.hungerDecrementTimer = setInterval(()=>
    this.handleDecrementHunger(), 50 );
  }

  componentWillUpdate(){
    if(this.state.masterTamagotchi.hunger === 0){
    clearInterval(this.hungerDecrementTimer)
  }
  }

  handleDecrementHunger(){
    let tamagotchi = this.state.masterTamagotchi.slice();
    tamagotchi.forEach((tamagotchi) =>
    tamagotchi.hunger --);
    this.setState({masterTamagotchi: tamagotchi})
  };

  handleIncrementHunger(){
    let tamagotchi = this.state.masterTamagotchi.slice();
    tamagotchi.forEach((tamagotchi) =>
    tamagotchi.hunger ++);
    this.setState({masterTamagotchi: tamagotchi})
  };

  handleNewTamagotchiToList(tamagotchi) {
    let newTamagotchi = this.state.masterTamagotchi.slice();
    newTamagotchi = [];
    newTamagotchi.push(tamagotchi);
    this.setState({masterTamagotchi: newTamagotchi});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          {this.state.masterTamagotchi.map((tamagotchi) =>
          <GameStats
            name={tamagotchi.name}
            hunger={tamagotchi.hunger}
            key={tamagotchi.id} />
          )}
          <Tamagotchi />
          <ControlButtons onFeedingTamagotchi= {this.handleIncrementHunger} />
          <NewTamagotchiForm onHandleNewTamagotchiToList={this.handleNewTamagotchiToList} />


        </header>
      </div>
    );
  }
}

export default App;
