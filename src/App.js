import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ShowCharacter from './ShowCharacter'
const axios = require('axios');
const starwarsAPI = "https://swapi.co/api/";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      data: {},
      character: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCharacter = this.handleCharacter.bind(this);
  }
  
    fetchAPI = (API) => {
      axios.get(API)
      .then(res => this.setState({
      data: res.data.results
    }))
    }
  componentDidMount = () => {
    
    this.fetchAPI(starwarsAPI + 'people/')
      
  }
  
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }
  handleCharacter(event){
    const target =event.target;
    let selectedCharacter = target.getAttribute("value");
    let characterInfo = this.state.data.filter(element => element.name === selectedCharacter)
    this.setState({
      character: characterInfo[0]
    })
  }
  render() {
    return (
      <div>
        <SearchBar
          searchQuery={this.state.searchQuery}
          handleChange={this.handleChange}
          handleCharacter={this.handleCharacter}
          data= {this.state.data}
          character = {this.state.character}
        />
        <ShowCharacter
        character ={this.state.character}
        />
      </div>
    );
  }
}

export default App;
