import React, { Component } from 'react'
import SearchBar from './SearchBar'

export class App extends Component {

  constructor(){
    super();
    this.state = {
      searchQuery: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }
  render() {
    return (
      <div>
        <SearchBar
        searchQuery ={this.state.searchQuery}
        handleChange = {this.handleChange}
        />
      </div>
    )
  }
}

export default App

