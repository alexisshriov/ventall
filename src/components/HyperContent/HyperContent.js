import React from 'react';
import './HyperContent.css'

class HyperContent extends React.Component {

  render() {
    return (
      <span onClick={this.props.expand} style={{ backgroundColor:  'rgb(188, 224, 253)', border: 'solid 1px rgb(52, 147, 236)', borderRadius: '5px', padding:'1px', color: 'blue', position:'relative', zIndex:10}}><b>{this.props.children}</b></span>
    )
  }
}

export default HyperContent;