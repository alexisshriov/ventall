import React from 'react';
import './AccordionHeader.css'

class AccordionHeader extends React.Component {

  render() {
    console.log(this.props)
    return (
        <div className={`accordion-header ${this.props.display?'accordion-header-active':null}`}>
          {this.props.children}
        </div>
    )
  }
}

export default AccordionHeader;