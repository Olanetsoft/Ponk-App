import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state ={
        monsters:[],
        searchField: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }
  
    render() {
      const monsters = this.state.monsters;
      const searchField = this.state.searchField

      const filteredMonsters = monsters.filter(monsters =>
          monsters.name.toLowerCase().includes(searchField.toLowerCase())
        )

      return (
        <div className="App">
          <input 
          type='search' 
          placeholder='search for ponk'
          onChange={e => this.setState({searchField: e.target.value})} 
          />
          <CardList monsters={filteredMonsters}/>
      </div>
      );
    }
}

export default App;