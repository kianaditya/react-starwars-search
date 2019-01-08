import React, { Component } from "react";

export class SearchBar extends Component {
  

  render() {
    let query = this.props.searchQuery;
    let data = this.props.data;
    let array, resultArray =[]
   if(data.length > 0)  {
    array =  data.map (character => character.name);
    resultArray = array.filter(
     el => el.toLowerCase().indexOf(query.toLowerCase()) > -1
   )
   } 
    return (
      <div>
        <h1>Search Here</h1>
        <input onChange={this.props.handleChange} name="searchQuery" /> Searching for: {query}
        <p>
          {resultArray.length > 0 ? resultArray.map(element => (
            
            <button name="character" value={element} onClick = {this.props.handleCharacter}>{element}</button>
            
          )) : false}
        </p>
      </div>
    );
  }
}

export default SearchBar;
