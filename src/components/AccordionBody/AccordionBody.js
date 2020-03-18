import React from 'react';
import './AccordionBody.css'

class AccordionBody extends React.Component {
  render() {
    return (
        <div className={`accordion-body ${this.props.display?"active":null}`}>
          {this.props.children}
        </div>

    )
  }
}

export default AccordionBody;