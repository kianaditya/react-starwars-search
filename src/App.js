import React, { Component } from "react";
import SearchBar from "./SearchBar";
const axios = require('axios');
const starwarsAPI = "https://swapi.co/api/";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount = () => {
    
      axios.get(starwarsAPI +'people/1/')
      .then(res => this.setState({
      data: res.data
    })) 
    
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
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          data= {this.state.data}
        />
      </div>
    );
  }
}

export default App;
