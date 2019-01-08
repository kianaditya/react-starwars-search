import React, { Component } from "react";

export class SearchBar extends Component {
  constructor() {
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
    let query = this.state.searchQuery;
    const array = ["a", "aa", "b", "bb", "ab", "ba"];
    const resultArray = array.filter(
      el => el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    return (
      <div>
        <h1>Search Here</h1>
        <input onChange={this.handleChange} name="searchQuery" />
        <p>
          {resultArray.map(element => (
            <p>{element}</p>
          ))}
        </p>
      </div>
    );
  }
}

export default SearchBar;
