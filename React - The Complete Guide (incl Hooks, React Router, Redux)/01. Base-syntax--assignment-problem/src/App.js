import React, { Component } from 'react'
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Bill Gates'
  }

  userNameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }
  
  render() {
    return (
      <div className='App'>
        <UserInput changed={this.userNameChangeHandler} currentName={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name="Steve Jobs" />
      </div>
    )
  }
}

export default App;