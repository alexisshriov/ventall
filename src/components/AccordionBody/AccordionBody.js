import React from 'react';
import './AccordionBody.css'

class AccordionBody extends React.Component {
  render() {
    return (
        <div className={`accordion-body ${this.props.display?"active":null}`}>
          A <b style={{ color: 'green' }}>read-only</b> value is a value that once asigned cannot be changed later on.
          {'If you try to re-asign it it will throw erros:'}<br /><br />
          <b style={{ color: 'green' }}>Example:</b> <br />
          {'const a = 0;'}<br />
          {'a = 1;'}<span style={{ color: 'brown' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//  this will throw an error.</span>
        </div>

    )
  }
}

export default AccordionBody;