import { Component } from "react";
import logo from "./logo.svg";

import CardList from './components/CardList/CardList.component'
import SearchBox from "./components/SearchBox/SearchBox.component";

import "./App.css";

//React renders on mount and rerenders on change of state
//Handler functions are passed as helper functions for children components

const App = () => {
  return (
    <div className="App">

      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} className={'monsters-search-box'}/>
      <CardList monsters={filteredMonsters} />

    </div>
  )
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  //This funciton gets initialized on the construction of the compoenent and does not necessarily reinitialize it on the change event. This OPTIMIZES the process
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {

    //Destructuring this to shorten variable names and make it easier to read
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} className={'monsters-search-box'}/>
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
