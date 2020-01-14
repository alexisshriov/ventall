import React from 'react';
import './AccordionBody.scss'

class AccordionBody extends React.Component {
  render() {
    return (
      <div className={`accordion-body ${this.props.display ? "active" : "inactive"}`}>
        <div className="content">
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default AccordionBody;