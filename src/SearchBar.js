import React, { Component } from "react";

export class SearchBar extends Component {
  

  render() {
    let query = this.props.searchQuery;
    const array = ["a", "aa", "b", "bb", "ab", "ba"];
    const resultArray = array.filter(
      el => el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
    return (
      <div>
        <h1>Search Here</h1>
        <input onChange={this.props.handleChange} name="searchQuery" />
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
