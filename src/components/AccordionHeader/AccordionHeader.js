import React from 'react';
import './AccordionHeader.scss'

class AccordionHeader extends React.Component {
  render() {
    return (
      <div className={`accordion-header ${this.props.display ? 'accordion-header-active' : null}`}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AccordionHeader;