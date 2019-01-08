import React, { Component } from 'react'

export class ShowCharacter extends Component {
  render() {
      let character = this.props.character
    return (
      <div>
        <h1> Name: {character.name}</h1>
        <h3> Born on {character.birth_year} </h3>
        <h3> Gender:  {character.gender} </h3>
        <h3> hair color:  {character.hair_color} </h3>
      </div>
    )
  }
}

export default ShowCharacter
