import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
      <div>
        Testing {this.props.attr}!
      </div>
    )
  }
}

export default Test
