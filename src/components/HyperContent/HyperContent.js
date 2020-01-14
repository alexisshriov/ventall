import React from 'react';
import './HyperContent.css'

class HyperContent extends React.Component {

  render() {
    return (
      <span className="hyper-content" onClick={this.props.expand}><b>{this.props.children}</b></span>
    )
  }
}

export default HyperContent;