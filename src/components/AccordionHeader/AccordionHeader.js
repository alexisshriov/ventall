import React from 'react';
import './AccordionHeader.css'

class AccordionHeader extends React.Component {

  render() {
    return (
        <div className="accordion-header">
          The <b style={{ color: 'blue' }}>const</b> keyword creates a <b style={{ color: 'green' }} onClick={this.props.toggleFunction}>read-only</b> reference to a value.  
        </div>
    )
  }
}

export default AccordionHeader;