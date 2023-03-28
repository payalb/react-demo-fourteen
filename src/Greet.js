
import React, {  PureComponent } from 'react'

export class Greet extends PureComponent {
  render() {
    return (
      <div>
        Greetings {this.props.attr}
      </div>
    )
  }
}

export default Greet
