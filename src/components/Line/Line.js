import React from 'react';
import './Line.css'

class Line extends React.Component {

  render() {
    return (
      <div className={`line ${this.props.display?'activeLine':null}`}>{' '.repeat(this.props.offset)+'_'.repeat(this.props.length)}</div>
    )
  }
}

export default Line;