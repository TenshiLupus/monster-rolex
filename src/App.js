import {useState, useEffect} from 'react'

import CardList from './components/CardList/CardList.component'
import SearchBox from "./components/SearchBox/SearchBox.component";

import "./App.css";

//React renders on mount and rerenders on change of state
//Handler functions are passed as helper functions for children components
//Pure functions: a function that only utlizes the values from its parameters
//Impure functions: a function that relies on external values for the return of its value
//Side effect functions: changes the value of an external values as a result of its execution
//Array destructuring allowsuse to set and initial value and defined the value and fucntion that will update the value
//If the state value of a component does not change. React does not rerender
//Whenever content is being fetched from outside API, we must assume that even if the content is the same as an existing one. The memory will differ. Thus ending in a state loop
//Functional components run its entire code everytime the state changes, from top to bottom.

//useEffect: Dependencies refer to state or prop value, whenever any of the values from the dependency array change. Then React will rerender the functional component
//React: Whenever a state is changed, it rerenders the page
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase(); 
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">

      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder={'set String'}/>
      <CardList monsters={filteredMonsters} />

    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   //This funciton gets initialized on the construction of the compoenent and does not necessarily reinitialize it on the change event. This OPTIMIZES the process
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {

//     //Destructuring this to shorten variable names and make it easier to read
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">

//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'search monsters'} className={'monsters-search-box'}/>
//         <CardList monsters={filteredMonsters} />

//       </div>
//     );
//   }
// }

export default App;
