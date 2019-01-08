import React, { Component } from 'react'

export class ShowCharacter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.character}</h1>
      </div>
    )
  }
}

export default ShowCharacter
