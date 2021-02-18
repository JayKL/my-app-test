import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    currentShowValue: ""
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  

handleClick = event => {
  setTimeout(3000)
  var currentShowValue = this.getRandomInt(1,4)
  if (currentShowValue==1) {
    currentShowValue="go for it"
  }
  if (currentShowValue==2) {
    currentShowValue="no"
  }
  if (currentShowValue==3) {
    currentShowValue="maybe"
  }
  setTimeout(
  this.setState({currentShowValue}), 2000)
}


  render(){
  return (
    <div className="App">
      <header className="App-header">
  <h1>{this.state.currentShowValue}</h1>
        <p>
          Hi Chiki, here is a basic react app :3           <Button variant="outline-primary" onClick={this.handleClick} >Click to Show Number</Button>
        </p>
      </header>
    </div>
  );
}
}

export default App;
