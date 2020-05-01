import React from 'react';
import './App.css';
import { CardList } from './Components/Card-List/card-list.component';
import { SearchBox } from './Components/SearchBox/search-box.component'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(
      users => users.json()
    ).then(
      json => this.setState({monsters : json})
    )
  }

  handleChange = e => {
    this.setState({searchField : e.target.value},() => console.log(this.state));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder='Search Monster' 
          handleChange={e => {
            this.setState({searchField : e.target.value},() => console.log(this.state))}} />
          
          <CardList monsters={filteredMonsters}/>
      </div>
    );    
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
