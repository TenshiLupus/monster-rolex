import {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor (){
    super() 

    this.state = {
      name: {firstName: 'Angel', lastName: 'Cardenas Martinez'},
      company: 'practice'
    }
  }

  render() {
    return (
    <div className="App">
      
    </div>
    )
  }
}

export default App;