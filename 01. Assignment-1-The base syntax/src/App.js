import React, { Component } from 'react'
import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'Bill Gates'
    }
    
    this.userNameChangeHandler = this.userNameChangeHandler.bind(this)
  }
  
  userNameChangeHandler(event) {
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