import { Component } from "react";
import logo from "./logo.svg";

import CardList from './components/CardList/CardList.component' 

import "./App.css";


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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.onSearchChange}
        />

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}

        <CardList monstersr={filteredMonsters} />

        <button onClick />
      </div>
    );
  }
}

export default App;
